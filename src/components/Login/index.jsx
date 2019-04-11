import React ,{Component} from 'react'
import styles from './login.css'

class Login extends Component{
    render(){
        return(
            <div className={styles.root}>
                <p className={styles.text}>
                    Inicia Sesion con GitHub para que puedas leer y escribir mensajes
                </p>
                <button className={styles.button}
                    onClick={this.props.onAuth}>
                <span className='fab fa-github '></span> Login with GitHub
                </button>
            </div>
        )
    }
}
export default Login