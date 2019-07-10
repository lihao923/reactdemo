import React, {Component} from 'react';
import Son1 from './Son1';

class Parent1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Parent1组件！',
            title: '我是来自Parent1组件的title!',
            num: 9527
         };
    }

    render() {
        return (
            <div id="parent1">
                <h4>{this.state.msg}</h4>
                <Son1 num={this.state.num}></Son1>
            </div>
        );
    }
}

export default Parent1;