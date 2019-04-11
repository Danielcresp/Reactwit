import React from 'react'
import styles from './header.css'

//Stateless 
//este es un compónente sin estado por lo que no necesitamos 
//crear la clase que herede de Componente pues no tiene estado 
function Header(){
    return(
        <header className={styles.root}>
          <h1 className={styles.logo}>Reactwit</h1>
        </header>
    )
}
export default Header