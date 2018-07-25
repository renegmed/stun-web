import React, {Component} from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends Component {   

    render() {
        const props = Object.assign({}, this.props);
        console.log("------------");
        console.log(props);

        const containerFluid = props.containerFluid;
        //delete props.containerFluid;
        console.log("------------");
        console.log(containerFluid);

        return <div {...this.props}
            className={classify('jumbotron',this.props.className)}>
            <Container fluid={containerFluid}>
            {this.props.children}
            </Container>
        </div>    
    }
}