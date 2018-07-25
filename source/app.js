import React, {Component} from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';

export default class App extends Component {
    render() {
        const useContainerFluid = true;
        return <Jumbotron className="-fluid text-center" 
           style={{backgroundImage:'url(img/forest-1198698_960_720.jpg)',color:'white'}} 
           containerFluid={useContainerFluid}>
        
            {/* 
            if containerFluid == true will result to 
                <div class="container-fluid" ... 
            otherwise 
                <div class="container" ...     */}
         
       <h1>Building React.js User Interfaces</h1>
       <p>with Bootstrap and SaSS.</p>
       <p><Button className="-primary" href="http://02geek.com/" target="_blank"/></p>
       <p><Button className="-danger-outline -sm"/></p>
       <p><Button className="-primary-outline -lg -block disabled"  /></p>
     
   </Jumbotron>
    }
}