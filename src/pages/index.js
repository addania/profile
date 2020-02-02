import React from "react"
import "./index.css";
import hero from './img/hero.jpg';

export default () => 
<div>
  <div class="image">
     <img src={hero} style={{width: "100%"}} alt="hero image" />

 <h2 style={{ fontSize: `72px` }} className="one"><span>Hi, I am Mia! I work as a Front-End Developer  {/*<span class='spacer'></span>*/}</span></h2>
 <h2 style={{ fontSize: `72px` }} className="two"><span>I am passionate about building and designing user interfaces :)  {/*<span class='spacer'></span>*/}</span></h2>
  </div>

</div>
