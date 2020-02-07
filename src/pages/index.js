import React from "react"
import "./index.css";
import hero from './img/hero.jpg';
import logo from './img/logo.png';
import { Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => 
<div>
  <div>
     <img src={hero} style={{width: "100%"}} alt="hero" />
     <Row>
     <Col sm={12} style ={{position: "absolute", top: "120px", width: "100%", textAlign: "center" }}>
     <div style={{width:"100%"}} className="centerImage"><img src={logo} style={{width: "45px"}} className="logo" alt="logo" /></div>
     </Col>
     </Row>
     <Row>
     <Col sm={12} style ={{position: "absolute", top: "100px" }}>
     <h2 className="title"><span>Hi, I am Mia! I work as a Front-End Developer</span></h2>
     </Col>
     </Row>
     <Row>
     <Col sm={12} style ={{position: "absolute", top: "150px" }}>
     <h2 className="subtitle"><span>I am passionate about building and designing user interfaces :)</span></h2>
     </Col>
     </Row>
  </div>
</div>
