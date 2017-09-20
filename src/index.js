import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import { Provider } from 'react-redux'
// import flightsReducer from './reducers/flightsReducer'
import { BrowserRouter as Router } from 'react-router-dom'


// const store = createStore(flightsReducer, applyMiddleWare(thunk))

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
