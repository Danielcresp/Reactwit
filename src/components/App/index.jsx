import React ,{Component} from 'react'
import firebase from 'firebase'

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
            user: null,
            isSignedIn: false
        }
        this.handleLogout = this.handleLogout.bind(this);

        this.uiConfig = {
            signInFlow: "popup",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              firebase.auth.TwitterAuthProvider.PROVIDER_ID,
              firebase.auth.GithubAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
              signInSuccess: () => false
            }
          }
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

    handleLogout(){
        firebase.auth().signOut()
        .then(()=> console.log('te has desconectado'))
        .catch(()=> console.error('Ocurrio un error'))
    }
    render(){
        return(
            <Router>
                <div>
                    <Header user={this.state.user} onLogout={this.handleLogout}s/>
                    <Route exact path="/" render={()=>
                        //Verificar si existe un usuario logeado sino mandar a login
                        (this.state.user) ?  <Main user={this.state.user} onLogout={this.handleLogout}/>
                        :  <Login uiConfig={this.uiConfig} 
                                firebaseAuth={firebase.auth()}/>//if y else en usa sola linea
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
                            picture={match.params.picture}
                            username={match.params.username}
                            displayName={match.params.username}
                            location={match.params.location}
                            emailAddress={match.params.username}
                          />
                    )} />
                    <Fotter/>
                </div>
            </Router>
        )
    }
}
export default App