import React from "react"
import { Header } from "../components/Header"
import { Logo } from "../components/Logo"
import { BackgroundImage } from "../components/BackgroundImage"
import hero from '../components/img/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => 
<div>
  <div>
     <BackgroundImage picture={hero} />
     <Logo />
     <Header text="Hi, I am Mia! I work as a Front-End Developer" position="100px" />
     <Header text="I am passionate about building and designing user interfaces :)" position="200px" />
  </div>
</div>
