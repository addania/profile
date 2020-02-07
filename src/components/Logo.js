import React from "react"
import logo from './img/logo.png';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Logo = () => (
    <Row>
     <Col sm={12} style ={{position: "absolute", top: "120px", width: "100%", textAlign: "center" }}>
     <div style={{width:"100%"}} className="centerImage"><img src={logo} style={{width: "45px"}} className="logo" alt="logo" /></div>
     </Col>
     </Row>
)