import React from 'react'
import styles from './footer.css'

//Stateless 

function Footer(){
    return(
        <div className={styles.root}>
            <div className={styles.info}>
                <p>Myours<br></br><span className={styles.copi}>Copyright © 2019 </span></p>
                
            </div>
            <div className={styles.redes}>
                <p className={styles.text}>
                    <span className='fab fa-facebook-square'></span> Facebook
                </p>
                <p className={styles.text}>
                    <span className='fab fa-instagram'></span> Instagram
                </p>
                <p className={styles.text}>
                    <span className='fab fa-github'></span> GitHub
                </p>
            </div>
        </div>
    )
}
export default Footer