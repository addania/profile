import React from "react"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { Header } from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img/hero4.jpg"

export default () => (
  <Layout image={background}>
    <Logo />
    <Header text="Hi, I am Mia! I work as a Front-End Developer" />
    <Header text="I am passionate about building and designing user interfaces :)" />
  </Layout>
)
