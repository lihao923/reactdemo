import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Content组件！'
         };
    }
    render() {
        return (
            <div id="content">
                {this.state.msg}
            </div>

        );
    }
}

export default Content;