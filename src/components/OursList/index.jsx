import React ,{Component}from 'react'
import PropTypes from 'prop-types'
import styles from './ours-list.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


function OursList({picture,username,onFollow,onPicture}){
    return (
        <div className={styles.root}>
           <Link to='/profile'>
                <figure>
                    <img className={styles.avatar} src={picture}/>
                </figure>
            </Link>    
            <span className={styles.username}>@{username}¡</span>
            <div className={styles.buttons}>
            <button onClick={onFollow} className={styles.button}>
                <span className={"fa fa-lg fa-edit"}></span>Follow
            </button>
            <button onClick={onPicture} className={styles.button}>
                <span className={'far fa-lg fa-image'}></span>
            </button>
            </div>
        </div>
    )
}
Component.propTypes={
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onFollow: PropTypes.func
}

export default OursList;