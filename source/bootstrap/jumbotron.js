import React, {Component} from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends Component {
    render() {
        return <div {...this.props}
            className={classify('jumbotron',this.props.className)}>
            <Container fluid style={{color:'red'}} className="experiment">
            {this.props.children}
            </Container>
        </div>    
    }
}