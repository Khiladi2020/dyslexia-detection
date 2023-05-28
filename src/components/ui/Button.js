import React from 'react'
import styles from './Button.module.css'

const Button = ({ title, onClick: handleClick, children }) => {
    return <button className={[styles.btn, title ? styles.btn_green : ""].join(" ")} onClick={handleClick}>{children ? children : title}</button>
}

export default Button