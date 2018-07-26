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
        this.state = {click: 0, labels: []};
    }
    onClick(e){
        let labels = this.state.labels.concat([this.state.click]);      
        this.setState({click:this.state.click+1,labels:labels });        
    }
    render() {

        console.log('----- render() -----');
        let buttons = this.state.labels.map((value, i) => {           
            return <Button key={i}>{value}</Button>
        });
 
        const useContainerFluid = true;
        return <ReactCSSTransitionGroup transitionName='app' 
             transitionAppear={true} transitionAppearTimeout={1000}
                transitionEnterTimeout={500} transitionLeaveTimeout={500}> 
        <Jumbotron className="-fluid custom"            
           containerFluid={useContainerFluid}>

       <h1>Building React.js User Interfaces</h1>
       <p>with Bootstrap and SaSS.</p>
       <p><Button className="-primary " href="http://02geek.com/" target="_blank" label="Discover things"/></p>
       <p><Button className="-danger-outline -sm">These are good stuffs</Button></p>
       <p><Button onClick={this.onClick} className="-primary -lg -block">{this.state.click}</Button></p>
     
       <ReactCSSTransitionGroup transitionName='app'              
                transitionEnterTimeout={500} transitionLeaveTimeout={500}> 
            {buttons}
        </ReactCSSTransitionGroup>
   </Jumbotron>
   </ReactCSSTransitionGroup>
    }
}