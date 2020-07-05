import React from "react"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { Header } from "../components/Header"
import { ProfileBox } from "../components/ProfileBox"
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/hero2.jpg"
import { Row, Col } from "react-bootstrap";
import portfolio1 from "./img/hero.jpg"
import portfolio2 from "./img/hero2.jpg"
import portfolio3 from "./img/hero4.jpg"

export default () => (

  <Layout image={background}>
    <Header text="Curious about projects I worked on?" />
    <Header text="Take a look around and see some of my works :)" />
    <Row style={{ background: "black", opacity: "0.7" }}>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url={portfolio1} landingPage="https://addania.github.io/coding/" text="Coding Knowledge Base" />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url={portfolio2} landingPage="https://addania.github.io/adventOfCode/" text="Advent of Code" />
      </Col>
    </Row>
    <Row >
      < Col style={{ textAlign: "center" }}>
        <ProfileBox url={portfolio3} landingPage="https://addania.github.io/yogata/" text="Yogata" />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url={portfolio1} landingPage="https://addania.github.io/yogata/" text="Book Search" />
      </Col>
    </Row>
  </Layout >

)
