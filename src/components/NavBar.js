import React from "react"
import logo from './img/logo.png';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export const NavBar = () => (
    <div>
        <Row style={{ padding: "0", margin: "0" }}>
            <Col sm={12} style={{ position: "absolute", top: "20px", textAlign: "center" }}>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">home</ListLink>
                    <ListLink to="/cv/">cv</ListLink>
                    <ListLink to="/portfolio/">portfolio</ListLink>
                    <ListLink to="/contact/">contact</ListLink>
                </ul>
            </Col>
        </Row>
        <Row style={{ padding: "0", margin: "0" }}>
            <Col sm={12} style={{ position: "absolute", top: "50px", textAlign: "center" }}>
                <Link to="/cv/">home</Link>
                <Link to="/portfolioä/">portfolio</Link>
                <Link to="/cv/">cv</Link>
            </Col>
        </Row>
    </div>
)