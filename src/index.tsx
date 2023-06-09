import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {authMe} from "./redux/auth-reducer";

const root = createRoot(document.getElementById('root') as HTMLElement);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )



/*store.subscribe(()=>{
store.getState()
    let state=store.getState()
    rerenderEntireTree(state)
})*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
