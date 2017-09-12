import React from 'react';


const RegisterLoginBtn = (props) => {
    return(
      <div className="row">
          <div className="col-sm-10 col-sm-offset-1 show-forms">
            <span className={props.RegisterClassName} onClick={props.handleRegisterClick}>Register</span>
            <span className="show-forms-divider">/</span>
            <span className={props.LoginClassName} onClick={props.handleLoginClick}>Login</span>
          </div>
      </div>
    );

}

export default RegisterLoginBtn;
