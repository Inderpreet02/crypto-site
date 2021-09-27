import React from 'react'
import "./Sidebar.css"
import logo from "./logo.png"
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/" className="link">
                <div className="sidebar__top">
                    <img className="sidebar__logo" src={logo} alt="logo" />
                    <h1 className="sidebar__heading">
                        CryptoDog
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
