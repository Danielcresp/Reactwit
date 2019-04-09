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
    }
    handleOpenText(event){
        event.preventDefault()
        this.setState({openText:true})
    }
    renderOpenText(){
        if(this.state.openText){
            return <InputText/>
        }
    }
    render(){
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}
export default Main