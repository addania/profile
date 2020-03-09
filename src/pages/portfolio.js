import React from "react"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { Header } from "../components/Header"
import { ProfileBox } from "../components/ProfileBox"
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (

  <Layout>
    <Logo />
    <Header text="Hi, I am Mia! I work as a Front-End Developer" />
    <Header text="I am passionate about building and designing user interfaces :)" />
    <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/coding/" />
    <ProfileBox url="https://i.imgur.com/j70VjxE.jpg" landingPage="https://addania.github.io/adventOfCode/" />
  </Layout>

)
