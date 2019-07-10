import React, {Component} from 'react';
import '../assets/css/index.css'


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '这是Event组件！',
            userName: ''
        }
    }


    run=(event)=> {
        console.log(event.target.getAttribute('aid'));
    }

    inputChange=()=> {
        // console.log(e.target.value);
        /* this.setState({
            userName: e.target.value
        }) */
        let value = this.refs.username.value;
        console.log(value);
        this.setState({
            userName: value
        })
    }

    getUsername=()=> {
        alert(this.state.userName);
    }

    inputKeyUp=(e)=> {
        if(e.keyCode === 13) {
            alert(e.target.value);
        }
    }


    render() {
        return (
            <div id="event">
                <h1>{this.state.msg}</h1>
                <hr />
                <div className="box">
                    <button type="button" aid="123456" onClick={this.run}>事件对象</button>
                </div>
                <div className="box">
                    <input type="text" ref="username" onChange={this.inputChange} /> <button type="button" onClick={this.getUsername}>获取input框的值</button>
                </div>
                <div className="box">
                    <input type="text" onKeyUp={this.inputKeyUp} />
                </div>
            </div>
        )
    }
}

export default Event;
