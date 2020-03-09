import React from "react"
import { Header } from "../components/Header"
import { Logo } from "../components/Logo"
import { NavBar } from "../components/NavBar"
import hero from '../components/img/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

export default () =>
  <div>
    <div>
      <NavBar />
      <div style={{ position: "absolute", maxWidth: "60%", top: "20%" }}>
        <Row>
          <Col sm={6} style={{ position: "absolute", top: "20%", left: "25%" }}>
            <img src="https://i.imgur.com/PerkTiY.jpg" style={{ position: "absolute", width: "300px" }} />
            <p style={{ position: "absolute", width: "30px" }}>HellosiwdertgdzfugihopjiuzftdredsaSDFGHGFDSAAsdcfvghfdsa</p>
          </Col>
          <Col sm={6} style={{ position: "absolute", top: "20%", left: "65%" }}>
            <img src="https://i.imgur.com/PerkTiY.jpg" style={{ position: "absolute", width: "300px" }} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
