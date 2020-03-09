import React from "react"
import { Header } from "../components/Header"
import { Logo } from "../components/Logo"
import 'bootstrap/dist/css/bootstrap.min.css';
import './cv.css';
import { NavBar } from "../components/NavBar"

export default () =>
  <div className="background" style={{ maxWidth: "100%" }}>
    <div>
      <div >
        <NavBar />
        <Logo />
        <Header text="Hi, I am Mia! I work as a Front-End Developer" />
        <Header text="I am passionate about building and designing user interfaces :)" />
      </div>
    </div>
  </div>
