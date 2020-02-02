import React from "react"
import "./index.css";
import hero from './img/hero.jpg';
import logo from './img/logo.png';

export default () => 
<div>
  <div class="image">

     <img src={hero} style={{width: "100%"}} alt="hero" />
     <div style={{width:"100%"}} className="centerImage"><img src={logo} style={{width: "45px"}} className="logo" alt="logo" /></div>
     
     <h2 style={{ fontSize: `72px` }} className="one"><span>Hi, I am Mia! I work as a Front-End Developer  {/*<span class='spacer'></span>*/}</span></h2>
     <h2 style={{ fontSize: `72px` }} className="two"><span>I am passionate about building and designing user interfaces :)  {/*<span class='spacer'></span>*/}</span></h2>
  </div>

</div>
