
import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { App } from './App';
import { logActions } from './middlewares';
import { pokemonReducer } from './reducer/pokemonReducer';

const composedEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logActions)
)
const store = createStore(pokemonReducer, composedEnhancers)

createRoot(document.getElementById("root"))
.render( 
    <Provider store={store}>
        <App /> 
    </Provider>
);