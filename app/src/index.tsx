import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./types/actions";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

// Store 
export const store = createStore(
    rootReducer,
    compose(
        composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({}) as ThunkMiddleware<AppState, AppActions>)
        ),
    )
);

// Provider component surround our app and pass the
// store into the application (so the application have access to the store)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
