import React from "react"
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
            <Col sm={12} style={{ textAlign: "center" }}>
                <ul style={{ listStyle: `none`, float: `middle` }}>
                    <ListLink to="/">home</ListLink>
                    <ListLink to="/cv/">cv</ListLink>
                    <ListLink to="/portfolio/">portfolio</ListLink>
                    <ListLink to="/contact/">contact</ListLink>
                </ul>
            </Col>
        </Row>
    </div>
)