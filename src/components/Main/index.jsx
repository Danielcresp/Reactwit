import React,{Component} from 'react'
import firebase from 'firebase';
import PropTypes from 'prop-types'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            user:Object.assign({},this.props.user,{ retweets:[]},{favorites:[]}),//hacer una copia del objeto
            openText:false,
            userNameToReply:'',
            messages:[{
                id: uuid.v4(),
                text: 'Mesaje det Retwit',
                picture:'https://pbs.twimg.com/profile_images/933162275879264258/TCVHXlGs_400x400.jpg',
                displayName: 'Holi Heldens',
                username: 'holiheldens',
                date:Date.now()-180000,
                retweets: 0,
                favorites: 0,
            },
            {
                id: uuid.v4(),
                text: ' Hola soy KSHMR',
                picture:'https://pbs.twimg.com/profile_images/1006568691436154880/8RDUqH5d_400x400.jpg',
                displayName: 'KSHMR',
                username: 'dharmaKSHMR',
                date:Date.now()-1800000,
                retweets: 0,
                favorites: 0,
            }]
        }
        //Bindear para ponder usar los estados 
        //this hace referencia a esta clase que estamos usando
        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)

    }
    componentWillMount(){//estar escuchando un cambio y puedo obtener los mensajes almacenados en firebase
        const messageRef = firebase.database().ref().child('messages')//hacer refrencia a DB al objeto de messajes
        messageRef.on('child_added' , snapshot =>{ // cada ves que agrege un child hacer una captura en tiempo real a DB
            this.setState({
                messages : this.state.messages.concat(snapshot.val()), //
                onOpenText: false 
            })
        })
    }
    handleSendText(event){
        event.preventDefault()//eliminar comportamiento por defecto del evento
        let newMessage={
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value,
            favorites:0,
            retweets:0
        }
        const messageRef = firebase.database().ref().child('messages')//Crear nuevo mensaje
        const messageID = messageRef.push()//eviar mensaje a base de datos de firebase
        messageID.set(newMessage) //mandar parametros del mensaje para ser creado en view
       this.setState({
           messages: this.state.messages.concat(newMessage), //concatenar el new Twitt
           openText:false
       })
    }
    handleCloseText(event){
        event.preventDefault()//eliminar comportamiento por defecto del evento
        this.setState({openText:false})  //cambia el estado y al cambiar el estado se hace un render actualizando el DOM
    }
    handleOpenText(event){
        event.preventDefault()
        //cambia el estado y al cambiar el estado se hace un render actualizando el DOM
        this.setState({openText:true})
    }
    handleRetweet(msgId){
        let alreadyRetweeted = this.state.user.retweets.filter(fav => fav == msgId)//comprovar si asido retweeteado
        if (alreadyRetweeted.length==0){ 
            let messages = this.state.messages.map(msg =>{//crear el array retweent modificado
                if(msg.id==msgId){
                    msg.retweets++
                }
                return msg
            })
        let user = Object.assign({}, this.state.user)//al nuevo objeto añadir el usuario
        user.retweets.push(msgId) //al nuevo usuario agregarle el nuevo mensage
        this.setState({
            messages,
            user
        })
        }
    }
    handleFavorite(msgId){
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav == msgId)//comprovar si asido favorito
        if (alreadyFavorited.length==0){ 
            let messages = this.state.messages.map(msg =>{//crear el array con los favoritos modificados
                if(msg.id==msgId){
                    msg.favorites++
                }
                return msg
            })
        let user = Object.assign({}, this.state.user)//al nuevo objeto añadir el usuario
        user.favorites.push(msgId) //al nuevo usuario agregarle el nuevo mensage
        // this.setState({
        //     messages:messages,
        //     user:user
        // })
        //nueva forma en ECMAS6  para modificar stado
        //si se quiere modificar y se llama igual que la key se puede poner solo una ves
        this.setState({
            messages,
            user
        })
        }
    }
    handleReplyTweet(msgId,userNameToReply){
        this.setState({
            openText:true,
            userNameToReply
        })
    }


    renderOpenText(){
        if(this.state.openText){ //mostrar o no mostar el elemento
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
                />
            )
        }
    }
    render(){
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText} //indicas que ejecute la accion con el this de el componente local
                    onLogout={this.props.onLogout}
                />
                {this.renderOpenText()}
                <MessageList 
                messages={this.state.messages}
                onRetweet={this.handleRetweet}
                onFavorite={this.handleFavorite}
                onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}
//Proptypes
Component.prototypes={
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func
}
export default Main