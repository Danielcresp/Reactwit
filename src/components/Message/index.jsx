import React,{Component} from 'react'
import style from './message.css'
import moment from 'moment';
class Message extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let dateFormat= moment (this.props.date).fromNow()
        return(
            <div className={style.root}>
                <div className={style.user}>
                    <figure>
                        <img className={style.avatar} src={this.props.picture}></img>
                    </figure>
                    <span className={style.displayName}>{this.props.displayName}</span>
                    <span className={style.username}>{this.props.username}</span>
                    <span className={style.date}>{dateFormat}</span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={style.buttons}>
                    <div className={style.icon}><span className='fa fa-reply'></span></div>
                    <div className={style.icon}><span className='fa fa-retweet'></span></div>
                    <div className={style.icon}><span className='fa fa-star'></span></div>
                </div>
            </div>
        )
    }
}
export default Message