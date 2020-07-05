import React from "react"
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profileBox.css"

export const ProfileBox = ({ landingPage, url, text }) => (
    <a href={landingPage} target="_blank">
        <div className="trigger" style={{ backgroundColor: "black" }} >
            <img src={url} alt="" style={{ height: "350px", maxWidth: "450px" }} />
            <div className="riser">{text}</div>
            <div className="riser2">{text}</div>
        </div >
    </a>
)
