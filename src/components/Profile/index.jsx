import React ,{Component} from 'react'
import styles from './profile.css'

class Profile extends Component{
    render(){
        return(
            <div className={styles.root}>
                <img className={styles.avatar} src={this.props.picture}/>
                <span className={styles.name}>{this.props.displayName}</span>
                <ul className={styles.data}>
                    <li>
                        <span className={'fa fa-user'}>{this.props.username}</span>
                    </li>
                    <li>
                        <span className={'fa fa-envelope'}>{this.props.emailAddress}</span>
                    </li>
                    <li>
                        <span className={'fa fa-map-marker'}>{this.props.location}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Profile