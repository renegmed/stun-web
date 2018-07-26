import React, {Component} from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        // binding tells this.onClick to call onClick(e)
        this.onClick = this.onClick.bind(this);
        this.state = {click: 0};
    }
    onClick(e){
        this.setState({click: this.state.click+1 });      
        //console.log(this.state.click);
    }
    render() {
        const useContainerFluid = true;
        return <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={1000}> 
        <Jumbotron className="-fluid custom"            
           containerFluid={useContainerFluid}>

       <h1>Building React.js User Interfaces</h1>
       <p>with Bootstrap and SaSS.</p>
       <p><Button className="-primary " href="http://02geek.com/" target="_blank" label="Discover things"/></p>
       <p><Button className="-danger-outline -sm">These are good stuffs</Button></p>
       <p><Button onClick={this.onClick} className="-primary -lg -block" 
                label={this.state.click==0? '0': this.state.click}/></p>
     
   </Jumbotron>
   </ReactCSSTransitionGroup>
    }
}