import React from "react";
import Navbar from "./contents/Navbar";
import Main from "./contents/Main";
import './dashboard.css';

export default function Dashboard2(){
    return (
        <div className="content">
            <Navbar />
            <Main />
        </div>
    )
}