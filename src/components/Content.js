import React from 'react';

class Content extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Content组件！'
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.aid);
    }

    render() {
        return (
            <div id="content">
                <h4>{this.state.msg}</h4>
            </div>
        )
    }
}

export default Content;