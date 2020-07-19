import React from "react"
import styles from './404.module.scss'
import Layout from "../components/layout"
import { Link } from "gatsby"
// import './404.module.css'

export default function Home() {
    return (
        
        <Layout className={styles.content}>
            <h1 className={styles.header}>Page Not Found</h1>
            <p className={styles.errorMessage}>
            Page Not Found
            </p>
            <Link to="/">Home</Link> | <Link to="/about">About me</Link>
        </Layout>
    )
}