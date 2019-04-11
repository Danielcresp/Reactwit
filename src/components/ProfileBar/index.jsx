import React ,{Component}from 'react'
import styles from './profile-bar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class ProfileBar extends Component{
    constructor(){
        super()
    }
    render(){
        let url =`/profile`
        return (
            <div className={styles.root}>
               <Link to={url}>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture}/>
                    </figure>
                </Link>    
                <span className={styles.username}>Hola @{this.props.username}¡</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className={"fa fa-lg fa-edit"}></span>Tweet
                </button>
            </div>
        )
    }
}
export default ProfileBar;