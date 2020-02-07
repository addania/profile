import React from "react"
import { Row, Col, Container } from "react-bootstrap";
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
     <Header />
  </div>
</div>
