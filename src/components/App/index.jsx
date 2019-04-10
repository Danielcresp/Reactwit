import React ,{Component} from 'react'
import 'normalize-css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
                onOpenText: false,
                displayName: 'Holiver Helders'
            }
        }
        this.Mai = this.Mai.bind(this) //bindear

    }
    
    Mai(){
        if(this.state.user){
            <Main user={this.state.user}/>
        }else{
        }
    }
    render(){
        return(
            
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" render={()=>
                        //Verificar si existe un usuario sino mandar a login
                        (this.state.user) ?  <Main user={this.state.user}/>: '' //if y else en usa sola linea
                    } />
                    <Route path="/profile" render={()=>{
                        //render <Profile>
                    }} />
                    <Route path="/about" render={(params)=>{
                        //render <Profile> pasando  params:username
                    }} />
                </div>
            </Router>
        )

    }

}
export default App