import React from "react"
import { Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const BackgroundImage = ({picture}) => (
    <img src={picture} style={{width: "100%"}} alt="hero" />
)