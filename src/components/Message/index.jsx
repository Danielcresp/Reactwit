import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import style from './message.css'
import moment from 'moment';

class Message extends Component{
    constructor(props){
        super(props)
        this.state={
            pressFavorite :false,
            pressRetweet: false
        }

        this.onPressRetweet = this.onPressRetweet.bind(this) //bindear
        this.onPressFavorite = this.onPressFavorite.bind(this)
    }
    onPressFavorite(){
        this.props.onFavorite()
        this.setState({
            pressFavorite: true
        })
    }
    onPressRetweet(){
        this.props.onRetweet()
        this.setState({
            pressRetweet: true
        })
    }
    render(){
        let dateFormat= moment (this.props.date).fromNow()
        let userLink =`/user/${this.props.username}`
        return(
            <div className={style.root}>
                <div className={style.user}>
                    <span className={style.date}>{dateFormat}</span>
                    <span className={style.date}>...</span>
                </div>
                <h3>{this.props.text}</h3>
                <div>
                    <span className={style.username}>@{this.props.username}</span>
                </div>
                <hr className={style.hr}></hr>
                <div className={style.buttons}>
                    <Link to={userLink}>
                      <figure>
                          <img className={style.avatar} src={this.props.picture}></img>
                      </figure>
                    </Link>
                    <div className={style.icon}
                        onClick={this.props.onReplyTweet}>
                        <span className='fa fa-reply'></span>
                    </div>
                    <div className={(this.state.pressRetweet) ? style.rtGreen : ''} //si estado es true de pressRetweet poner estilo sino no poner nada
                         onClick={this.onPressRetweet}>
                        <span className='fa fa-retweet'></span>
                        <span className={style.num}>{this.props.numRetweets}</span>
                    </div>
                    <div className={(this.state.pressFavorite) ? style.favYellow : ''}
                         onClick={this.onPressFavorite}>
                        <span className='fa fa-star'></span>
                        <span className={style.num}>{this.props.numFavorites}</span>
                    </div>
                </div>
            </div>
        )
    }
}
//Definir de que tipo es cada propíedad Heredada
//Validar todas las propiedades
Component.propTypes = {
    onFavorite: PropTypes.func.isRequired, //es de tipo function y que es requerido
    onRetweet: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    username:PropTypes.string.isRequired, //es de tipo string y que es requerido
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired, //es de tipo number y que es requerido
    numFavorites: PropTypes.number.isRequired,
    numRetweets: PropTypes.number.isRequired,
}
export default Message