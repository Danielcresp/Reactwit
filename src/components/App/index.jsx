import React ,{Component} from 'react'
import 'normalize-css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

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
        this.handleOnAuth = this.handleOnAuth.bind(this);
    }
    handleOnAuth(){
        console.log('Auth')
    }
    
    render(){
        return(
            
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" render={()=>
                        //Verificar si existe un usuario logeado sino mandar a login
                        (this.state.user) ?  <Main user={this.state.user}/>:  <Login onAuth={this.handleOnAuth}/>//if y else en usa sola linea
                    } />
                    <Route path="/profile" render={()=>( 
                        //render <Profile>
                        <Profile
                            picture={this.state.user.photoURL}
                            username={this.state.user.email.split('@')[0]}
                            displayName={this.state.user.displayName}
                            location={this.state.user.location}
                            emailAddress={this.state.user.email}
                        />
                    )} />
                    <Route path="/user/:username" render={({ match })=>( 
                         //render <Profile> pasando  params:username
                         <Profile
                            //picture={params.username}
                            username={match.params.username}
                            displayName={match.params.username}
                            // location={this.state.user.location}
                            // emailAddress={this.state.user.email}
                          />
                    )} />
                </div>
            </Router>
        )

    }

}
export default App