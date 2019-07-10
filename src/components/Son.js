import React, {Component} from 'react';

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Son组件！'
        };
    }

    blabla=()=> {
        alert('来自Son组件的信息！')
    }

    render() {
        return (
            <div id="header">
                <h4>{this.state.msg}</h4>
                <p>{this.props.title}</p>
                <button onClick={this.props.run}>执行run方法</button>
                <br />
                <button onClick={this.props.parent.getChildData.bind(this, 'HELLO FUCKING WORLD!')}>给父组件传递数据</button>
            </div>
        );
    }
}

export default Son;