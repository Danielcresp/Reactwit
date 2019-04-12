import React ,{Component}from 'react'
import PropTypes from 'prop-types'
import styles from './profile-bar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function ProfileBar({picture,username,onOpenText,onLogout}){
    return (
        <div className={styles.root}>
           <Link to='/profile'>
                <figure>
                    <img className={styles.avatar} src={picture}/>
                </figure>
            </Link>    
            <span className={styles.username}>Hola @{username}¡</span>
            <button onClick={onOpenText} className={styles.button}>
                <span className={"fa fa-lg fa-edit"}></span>Tweet
            </button>
            <button onClick={onLogout} className={styles.button}>
                <span className={'fa fa-sign-out-alt'}>Salir</span>
            </button>
        </div>
    )
}
Component.propTypes={
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func
}

export default ProfileBar;