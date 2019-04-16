import React,{Component} from 'react'
import styles from './header.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//Stateless 
//este es un compónente sin estado por lo que no necesitamos 
//crear la clase que herede de Componente pues no tiene estado 
class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            (this.props.user != null) ? <header className={[styles.root,'position-relative'].join(' ')}>
            <div className='row container-fluid'>
            <div className='col-md-1'>
                   <Link  className={styles.logo} to='/'>
                       <h1 className={styles.logo}>Myours</h1>
                   </Link>
               </div>
               <div className='col-md-0'>
                   <Link  className={styles.logo} to='/notify'>
                       <h1 className={styles.logo}><i className="far fa-bell"></i></h1>
                   </Link>
               </div>
               <div className='col-md-4 text-right'>
                   <input className={[styles.search,"form-control"].join(' ')} placeholder='Search'></input>
               </div>
               <div className={[styles.perfil,"col-md-4 ml-auto"].join(' ')}>
                   <img className={[styles.avatar, 'mr-4'].join(' ')}></img>
                   <button className="btn btn-primary mr-2">Mention</button>
                   <button className='btn btn-primary mr-2'>React</button>
                   <button className='btn btn-primary mr-2'>Tweet</button>
                   <button onClick={this.props.onLogout} className='btn btn-primary'>
                    <span className={'fa fa-sign-out-alt'}>Salir</span>
                  </button>
               </div>
            </div>
           </header> : <header className={[styles.root,'position-relative'].join(' ')}>
            <div className='row flex-items-md-between container-fluid'>
            <div className='col-md-1'>
                   <Link  className={styles.logo} to='/'>
                       <h1 className={styles.logo}>Myours</h1>
                   </Link>
               </div>
            </div>
           </header>
    
        )
    }
}
export default Header