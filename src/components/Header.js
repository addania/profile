import React from "react"
import "./header.css";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = ({ text, position }) => (
    <div>
        <Row>
            <Col sm={12}>
                <h2 className="title"><span>{text}</span></h2>
            </Col>
        </Row>
    </div>
)