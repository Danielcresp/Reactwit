//Import
import React ,{Component} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import PropTypes from 'prop-types'
import styles from './login.css'


//Componente Representacional
function Login({uiConfig,firebaseAuth}){
    return(
        <div className={styles.root}>
            <div className={styles.nav}>
                <p className={styles.text}>
                    Inicia Sesion 
                </p>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebaseAuth}
                />
            </div>
        </div>
    )
}
//PropType
Component.propTypes={
    onAuth: PropTypes.func
}
//Export
export default Login