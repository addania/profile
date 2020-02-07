import React from "react"
import "./header.css";
import { Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => (
    <div>
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
)