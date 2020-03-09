import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import { NavBar } from "./NavBar"

export const Layout = ({ children }) => (
    <div className="background" style={{ maxWidth: "100%" }}>
        <div>
            <div >
                <NavBar />
                {children}
            </div>
        </div>
    </div>
)