import React, {Component} from 'react';
import Button from './bootstrap/button';

export default class App extends Component {
    render() {
        return <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage:'url(img/forest-1198698_960_720.jpg)',color:'white'}}>
    <div className="container"> 
       <h1>Building React.js User Interfaces</h1>
       <p>with Bootstrap and SaSS.</p>
       <p><Button className="-primary" href="http://02geek.com/" target="_blank"/></p>
       <p><Button className="-danger-outline -sm"/></p>
       <p><Button className="-primary-outline -lg -block disabled"  /></p>
    </div>
   </div>
    }
}