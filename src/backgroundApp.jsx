import React, { useState } from 'react';
import './backgroundAppCss.css';

function BackGround() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="background-container">
        <img src="src/assets/HOME_V0.jpg" alt="backGround" className="background-image" />
      </div>
      <div className="containerHeader">
        <div className="top-left">
          <h1>O'Fridge</h1>
        </div>

        <div className='menu'>

          <div className="button-container">
            <button className="button"></button>
            <span className="hidden">S'INSCRIRE</span>
          </div>
          <div className="button-container2">
            <button className="button"></button>
            <span className="hidden2">CONNEXION</span>
          </div>
          <div className="button-container3">
            <button className="button"></button>
            <span className="hidden3">RECHERCHE</span>
          </div>
          <div className="button-container4">
            <button className="button"></button>
            <span className="hidden4">PRODUIT</span>
          </div>
          <div className="button-container5">
            <button className="button"></button>
            <span className="hidden5">COMPTE</span>
          </div>
          <div className="button-container6">
            <button className="button"></button>
            <span className="hidden6">MENU</span>
          </div>
        </div>
      </div>


      <footer>

        <div className="containerFooter">
          <div className="bottom-left">
            <h2>O'Fridge</h2>
          </div>

          <div className='logoSocial'>
            <img src="src/assets/instagram.svg" alt="instagram"></img>
            <img src="src/assets/ant-design_facebook-filled.svg" alt="facebook"></img>
            <img src="src/assets/ant-design_twitter-outlined.svg" alt="twitter"></img>
          </div>


          <h3>Copyright 2024 O'Fridge</h3>

        </div>

      </footer>
    </>
  );
}

export default BackGround;