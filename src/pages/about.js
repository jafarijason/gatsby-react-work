import React from "react"
import { Link } from "gatsby"
import styles from './404.module.scss'
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
      <div className={styles.content}>
        <h1 className={styles.header}>Page Not Found</h1>
        <p className={styles.errorMessage}>
          Page Not Found
            </p>
      </div>
    </div>
  )
}