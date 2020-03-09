import React from "react"
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profileBox.css"

export const ProfileBox = ({ landingPage, url }) => (
    <a href={landingPage} target="_blank">
        <div className="trigger">
            <img src={url} alt="" style={{ height: "300px" }} />
            <div className="riser">Coding Knowledge Base</div>
        </div >
    </a>
)
