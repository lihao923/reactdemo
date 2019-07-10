import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '这是List组件！'
        }
    }

    inputChange=(e)=> {
        this.setState({
            msg: e.target.value
        })
    }

    setMsg=()=> {
        this.setState({
            msg: '章北海'
        })
    }

    render() {
        return (
            <div id="list">
                <h1>{this.state.msg}</h1>
                <div>
                    <input type="text"  value={this.state.msg} onChange={this.inputChange} />
                    <button onClick={this.setMsg}>改变msg</button>
                </div>
            </div>
        )
    }
}

export default List;
