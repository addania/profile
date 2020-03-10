import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import { NavBar } from "./NavBar"
import Image from "./img/hero4.jpg"

export const Layout = ({ children, image }) => (
    <div className="background" style={{ backgroundImage: `url(${image})`, maxWidth: "100%" }}>
        <div>
            <div >
                <NavBar />
                {children}
            </div>
        </div>
    </div>
)