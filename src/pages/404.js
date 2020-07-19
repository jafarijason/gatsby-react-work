import React from "react"
import styles from './404.module.scss'
// import './404.module.css'

export default function Home() {
    return (
        
        <div className={styles.content}>
            <h1 className={styles.header}>Page Not Found</h1>
            <p className={styles.errorMessage}>
            Page Not Found
            </p>
        </div>
    )
}