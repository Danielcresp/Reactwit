import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './profile.css'

//Component Stateless o Representacional
function Profile({picture,displayName,username,emailAddress,location}){
    return(
        <div className={styles.root}>
            <img className={styles.avatar} src={picture}/>
            <span className={styles.name}>{displayName}</span>
            <ul className={styles.data}>
                <li>
                    <span className={'fa fa-user'}>{username}</span>
                </li>
                <li>
                    <span className={'fa fa-envelope'}>{emailAddress}</span>
                </li>
                <li>
                    <span className={'fa fa-map-marker'}>{location}</span>
                </li>
            </ul>
        </div>
    )
}
//PropTypes
Component.propTypes={
    picture:PropTypes.string.isRequired,
    displayName:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    emailAddress:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired
}

//Export
export default Profile