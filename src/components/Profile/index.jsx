import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './profile.css'

//Component Stateless o Representacional
function Profile({picture,displayName,username,emailAddress,location}){
    return(
        <div className={[styles.root,'container'].join('')}>
            <div className={styles.perfil}>
                <div className={styles.backg}>
                     <img className={styles.avatar} src={picture}/>
                </div>
                <span className={styles.name}>{displayName}</span>
            </div>
            <div className={[styles.info,'row'].join(' ')}>
                <div className={[styles.user,'col-md-2'].join(' ')}>
                     <span className={'fa fa-user'}> {username}</span>
                </div>
                <div className={[styles.email,'col-md-2'].join(' ')}>
                     <span className={'fa fa-envelope'}> {emailAddress}</span>
                </div>
                <div className={[styles.follow,'col-md-2'].join(' ')}>
                    <span className={'fas fa-user-plus'}> {location}follow</span>
                </div>
            </div>
            <div className={[styles.main,'container'].join(' ')}>
                <div className={[styles.myour,'container'].join(' ')}>
                    <div className='col-md-3'>
                    Tweet
                    </div>
                    <div className='col-md-3'>
                    Retweet
                    </div>
                    <div className='col-md-3'>
                    Like
                    </div>
                </div>
            </div>
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