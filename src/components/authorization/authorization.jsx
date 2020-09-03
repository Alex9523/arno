import React from 'react';
//import './menu.css';

function Authorization() {
  return (
    <div className="authorization">
      <h1>Authorization</h1>
      <form className="authorization-form">
          <input className="form__input-login" placeholder="Login"/>
          <input className="form__input-pass" placeholder="Pass"/>
          <button className="form__button">Log in</button>
      </form>
    </div>
  );
}

export default Authorization;
