import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import Hello from "./hello/hello";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import hello from "./hello/hello";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} /> 
                <Route path="/hello" component={hello} />
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();
