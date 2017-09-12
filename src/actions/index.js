import Firebase from 'firebase';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

var config = {
  apiKey: "AIzaSyDiXE4GbABt7q61x6mmxcP3GW23augjXx4",
  authDomain: "tellthemnow-4bf4d.firebaseapp.com",
  databaseURL: "https://tellthemnow-4bf4d.firebaseio.com",
  projectId: "tellthemnow-4bf4d",
  storageBucket: "tellthemnow-4bf4d.appspot.com",
  messagingSenderId: "990149701440"
};
Firebase.initializeApp(config);

export function signUp(credentials) {
  return function(dispatch) {
      Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
          .then(response => {
              dispatch(authUser());
          })
          .catch(error => {
              console.log(error);
              dispatch(authError(error));
          });
          const fullName = `${credentials.firstName} ${credentials.lastName}`;
          Firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              Firebase.database().ref(`users/${user.uid}`).set({
              email: user.email,
              fullName: fullName,
              uid: user.uid
            });
            } else {
              // No user is signed in.
            }
          });
  }
}

export function signIn(credentials) {
    return function(dispatch) {
        Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch(authUser());
            })
            .catch(error => {
                dispatch(authError(error));
            });
    }
}

export function facebookSignUp() {
    return function(dispatch) {
      var provider = new Firebase.auth.FacebookAuthProvider();

        Firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
          Firebase.database().ref(`users/${user.uid}`).set({
          email: user.email,
          fullName: user.displayName,
          uid: user.uid
        });

      dispatch(authUser());
    }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        }
        dispatch(authError(error));
      });
    }
}

export function facebookSignIn() {
    return function(dispatch) {
      var provider = new Firebase.auth.FacebookAuthProvider();

        Firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
            console.log(user);
      Firebase.database().ref(`users/${uid}`).once('value').then(snapshot => {
        var username = snapshot.val().fullName;
        // ...
      });
      dispatch(authUser());
    }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        }
        dispatch(authError(error));
      });
    }
}

export function twitterSignUp() {
    return function(dispatch) {
      var provider = new Firebase.auth.TwitterAuthProvider();

        Firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      Firebase.database().ref(`users/${user.uid}`).set({
        email: user.email,
        fullName: user.displayName,
        uid: user.uid
      });

      dispatch(authUser());
    }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        }
        dispatch(authError(error));
      });
    }
}
export function twitterSignIn() {
    return function(dispatch) {
      var provider = new Firebase.auth.TwitterAuthProvider();

        Firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      dispatch(authUser());
    }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        }
        dispatch(authError(error));
      });
    }
}

export function signOut() {
  return function (dispatch) {
      Firebase.auth().signOut()
          .then(() =>{
              dispatch({
                  type: SIGN_OUT_USER
              })
          });
  }
}

export function authUser() {
    return {
        type: AUTH_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function verifyAuth() {
    return function (dispatch) {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authUser());
            } else {
                dispatch(signOut());
            }
        });
    }
}
