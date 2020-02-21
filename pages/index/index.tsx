import React from 'react';
import './styles.scss';

export default function Home() {
  function handleRoute() {
    window.location.href = '/sign-in-user';
  }
  function handleRouteReg() {
    window.location.href = '/register';
  }
  return (
    <div className="container">
      <h1 className="BigTitle">Welcome to TransportWise</h1>
      <p className="SubTitle">Let's discuss transport</p>
      <br />
      <button type="button" className="btn1" onClick={handleRoute}>
        Login
      </button>
      <br /> <br />
      <button type="button" className="btn2" onClick={handleRouteReg}>
        Register
      </button>
    </div>
  );
}
