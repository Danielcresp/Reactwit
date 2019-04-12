import React from 'react'
import styles from './header.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


//Stateless 
//este es un compónente sin estado por lo que no necesitamos 
//crear la clase que herede de Componente pues no tiene estado 
function Header(){
    return(
        <header className={styles.root}>
        <Link  className={styles.logo} to='/'>
        <h1 className={styles.logo}> Reactwit</h1>
        </Link>
         
        </header>
    )
}
export default Header