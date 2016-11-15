var React=require('react');
var ReactDOM=require('react-dom');
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import Main from './components/Main.jsx';


//loading foundation css and jquery
require('style!css!foundation-sites/dist/foundation.min.css');
require('applicationStyles');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main} history={hashHistory}>
        </Route>
    </Router>
,document.getElementById("content")
);
