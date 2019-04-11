//Import
import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import styles from './login.css'

//Componente Representacional
function Login({onAuth}){
    return(
        <div className={styles.root}>
            <p className={styles.text}>
                Inicia Sesion con GitHub para que puedas leer y escribir mensajes
            </p>
            <button className={styles.button}
                onClick={onAuth}>
            <span className='fab fa-github '></span> Login with GitHub
            </button>
        </div>
    )
}
//PropType
Component.propTypes={
    onAuth: PropTypes.func
}
//Export
export default Login