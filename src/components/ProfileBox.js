import React from "react"
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profileBox.css"

export const ProfileBox = ({ landingPage, url, text }) => (
    <a href={landingPage} target="_blank">
        <div className="trigger" style={{ backgroundColor: "black" }} >
            <img src={url} alt="" style={{ height: "300px" }} />
            <div className="riser">{text}</div>
        </div >
    </a>
)
