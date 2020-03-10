import React from "react"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { Header } from "../components/Header"
import { ProfileBox } from "../components/ProfileBox"
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/hero2.jpg"
import { Row, Col } from "react-bootstrap";

export default () => (

  <Layout image={background}>
    <Header text="Hi, I am Mia! I work as a Front-End Developer" />
    <Header text="I am passionate about building and designing user interfaces :)" />
    <Row style={{ background: "black", opacity: "0.7" }}>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/coding/" text="Coding Knowledge Base" />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/adventOfCode/" text="Advent of Code" />
      </Col>
    </Row>
    <Row >
      < Col style={{ textAlign: "center" }}>
        <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/yogata/" text=">>>" />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/yogata/" text=">>>" />
      </Col>
    </Row>
  </Layout >

)
