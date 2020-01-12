import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import About from './components/About'; 
import Work from './components/Work';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/work'} component={Work} />
        <Route path={'/contact'} component={Contact} />
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
