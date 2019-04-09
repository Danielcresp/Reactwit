import React,{Component} from 'react'
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
                    <div className={style.icon}
                        onClick={this.props.onReplyTweet}
                    >
                        <span className='fa fa-reply'></span>
                    </div>
                    <div className={(this.state.pressRetweet) ? style.rtGreen : ''} //si estado es true de pressRetweet poner estilo sino no poner nada
                         onClick={this.onPressRetweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className={style.num}>{this.props.numRetweets}</span>
                    </div>
                    <div className={(this.state.pressFavorite) ? style.favYellow : ''}
                         onClick={this.onPressFavorite}
                    >
                        <span className='fa fa-star'></span>
                        <span className={style.num}>{this.props.numFavorites}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message