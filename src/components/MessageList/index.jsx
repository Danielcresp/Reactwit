import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import styles from './message-list.css'

//Component Representacional
function MessageList ({messages,onRetweet,onFavorite,onReplyTweet}){
    return(
        <div className={styles.root}>
            {messages.map(msg=> {
               return (
                <Message 
                key={msg.id}
                text={msg.text}
                picture={msg.picture}
                displayName={msg.displayName}
                username={msg.username}
                date={msg.date}
                numRetweets={msg.retweets}
                numFavorites={msg.favorites}
                onRetweet={()=> onRetweet(msg.id)} //para ejecutar la funcion en este mismo componente 
                onFavorite={()=> onFavorite(msg.id)}//se usa las arrowfunction y se pasa los parametros
                onReplyTweet={()=> onReplyTweet(msg.id,msg.username)}
                />
               ) 
            }).reverse()}
        </div>
    )
}
//PropTypes
Component.propTypes={
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
}
//Export
export default MessageList