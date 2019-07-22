import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore' 
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/firebase'


const config = {
    useFirestoreForProfile: true,
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
  }
  const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig, config)
      )
    );
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();