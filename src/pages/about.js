import React from "react"
import { Link } from "gatsby"
import styles from './404.module.scss'
import Layout from "../components/layout"


export default function Home() {
  return (

    <Layout>
      <h1>About Us</h1>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About me</Link>
      </div>
      <p>
        About Us
            </p>
      <div className={styles.content}>
        <h1 className={styles.header}>Page Not Found</h1>
        <p className={styles.errorMessage}>
          Page Not Found
            </p>
      </div>
    </Layout>
  )
}