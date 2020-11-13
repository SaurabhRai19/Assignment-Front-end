import React from "react";
import Base from "./Base";
import { Link, withRouter } from "react-router-dom";



export default function Home() {
    return (
        <Base title="Home Page" description="Welcome to the Home Page">
            <div className="row text-center">
                <div className="row mt-4">
                    <h1>Welcome..</h1>
                </div>
            </div>
        </Base>
    );
}
