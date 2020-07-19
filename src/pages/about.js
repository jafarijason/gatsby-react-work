import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return (
        
        <div>
            <h1>About Us</h1>
            <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
            </div>
            <p>
            About Us
            </p>
        </div>
    )
}