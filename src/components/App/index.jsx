import React ,{Component} from 'react'
import 'normalize-css'
import styles from './app.css'

import Header from '../Header'
import Main from '../Main'

class App extends Component{
    constructor(){
        super()
        this.state={
            user:{
                photoURL:'https://pbs.twimg.com/profile_images/933162275879264258/TCVHXlGs_400x400.jpg',
                email:'oliverhelop@gmail.com',
                onOpenText: false
            }
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <Main user={this.state.user}/>
            </div>
        )
    }
}
export default App