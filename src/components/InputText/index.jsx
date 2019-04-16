import React , {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './input-text.css'

//Componente Representacional
function InputText ({onSendText,userNameToReply,onCloseText}){
    return(
        //activar un ponponente desde componente Hijo
        <form className={styles.from} method='post' onSubmit={onSendText}>
            <textarea className={styles.text} name='text'>
                {(userNameToReply) ? `@${userNameToReply} `:''}
            </textarea>
            <div className={styles.buttons}>
                <button className={styles.close} onClick={onCloseText}><i className="fas fa-lg fa-times"></i></button>
                <button className={styles.send} type='submit'><i className="far fa-paper-plane"></i>Enviar</button>
            </div>
        </form>
    )
}

//Definir de que tipo es cada propíedad Heredada
//Validar todas las propiedades
Component.propTypes = {
    onSendText:  PropTypes.func,
    onCloseText: PropTypes.func,
    userNameToReply: PropTypes.string,
}
export default InputText