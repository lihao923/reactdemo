import React, {Component} from 'react';
import Son from './Son';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Parent组件！',
            title: '子组件'
         };
    }

    run=()=> {
        console.log(this.refs.son.state.msg);
        this.refs.son.blabla();
    }

    getData=()=> {
        alert(this.state.msg);
    }

    getChildData=(res)=> {
        this.setState({
            msg: res
        })
    }

    render() {
        return (
            <div id="parent">
                <h4>{this.state.msg}</h4>
                <Son ref="son" title={this.state.title} run={this.run} parent={this}></Son>
                <button onClick={this.run}>父组件获取子组件数据和方法</button>
            </div>
        );
    }
}

export default Parent;