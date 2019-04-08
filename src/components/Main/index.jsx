import React,{Component} from 'react'
import MessageList from '../MessageList'
class Main extends Component{
    constructor(){
        super()
        this.state={
            messages:[{
                text: 'Mesaje det Retwit',
                picture:'https://pbs.twimg.com/profile_images/933162275879264258/TCVHXlGs_400x400.jpg',
                displayName: 'Holi Heldens',
                username: 'holiheldens',
                date:Date.now()-180000
            },
            {
                text: 'DJ DONDia',
                picture:'https://pbs.twimg.com/profile_images/1049771810588385280/zyDdt5IL_400x400.jpg',
                displayName: 'Don Dia',
                username: 'dondia',
                date:Date.now()-1800000
            }]
        }
    }
    render(){
        return (
            <MessageList messages={this.state.messages}/>
        )
    }
}
export default Main