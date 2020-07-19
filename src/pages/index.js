import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return (
        
        <div>
            <h1>salam</h1>
            <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
            </div>
            <p>
                are baba
            </p>
        </div>
    )
}