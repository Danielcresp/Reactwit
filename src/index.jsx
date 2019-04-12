import React from 'react'
import {render} from 'react-dom'
import firebase from 'firebase/app';

import App from './components/App'

firebase.initializeApp({
    apiKey: 'AIzaSyCnqGEapTXCtvlqKoGCqUkAb3d5gt0muE4',
    authDomain: 'reactwit.firebaseapp.com',
    databaseURL: 'https://reactwit.firebaseio.com',
    projectId: 'reactwit',
    storageBucket: 'reactwit.appspot.com',
    messagingSenderId: '1092907670509'
});

render(<App/>,document.getElementById('root'))