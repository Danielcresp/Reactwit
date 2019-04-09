import React,{Component} from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
class Main extends Component{
    constructor(){
        super()
        this.state={
            openText:false,
            messages:[{
                id: uuid.v4(),
                text: 'Mesaje det Retwit',
                picture:'https://pbs.twimg.com/profile_images/933162275879264258/TCVHXlGs_400x400.jpg',
                displayName: 'Holi Heldens',
                username: 'holiheldens',
                date:Date.now()-180000
            },
            {
                id: uuid.v4(),
                text: 'DJ DONDia',
                picture:'https://pbs.twimg.com/profile_images/1049771810588385280/zyDdt5IL_400x400.jpg',
                displayName: 'Don Dia',
                username: 'dondia',
                date:Date.now()-1800000
            }]
        }

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this);

    }
    handleSendText(event){
        event.preventDefault()//eliminar comportamiento por defecto del evento
        let newMessage={
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value
        }
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
    renderOpenText(){
        if(this.state.openText){ //mostrar o no mostar el elemento
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
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
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}
export default Main