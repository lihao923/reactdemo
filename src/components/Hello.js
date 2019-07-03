import React, {Component} from 'react';

import '../assets/css/index.css';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: '这是Hello组件!',
            arr: ['javascript','css','html','vue', 'react']
         };
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <ul>
                {
                    this.state.arr.map((value, key)=>{
                        return <li>{value}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Hello;