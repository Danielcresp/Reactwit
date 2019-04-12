import React ,{Component} from 'react'
import firebase from 'firebase';
import 'normalize-css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import Fotter from '../Footer'

class App extends Component{
    constructor(){
        super()
        this.state={
            user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this);
    }
    //Sirve par aplicasiones isomorficas que esten renderisadosas desde el sevidor
    componentWillMount (){//mantener l usurio en el render 
        firebase.auth().onAuthStateChanged(user =>{
            if (user){
                this.setState({user})
            }else{
                this.setState({user: null})
            }
        })
    }
    handleOnAuth(){
        const provider = new firebase.auth.GithubAuthProvider() //utilisar  auth de github 
        firebase.auth()
            .signInWithPopup(provider) //ventana de si quiere iniciar session con el proveedor
            //Promesas
            .them(result => console.log(`${result.user.email} has iniciado sesion`))
            .catch(error => console.error(`Error: ${error.code}:${error.message}`))
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
                    <Fotter/>
                </div>
            </Router>
        )
    }
}
export default App