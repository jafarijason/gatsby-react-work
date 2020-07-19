import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
    return (
        
        <Layout>
            <h1>salam</h1>
            <div>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
            </div>
            <p>
                are baba
            </p>
        </Layout>
    )
}