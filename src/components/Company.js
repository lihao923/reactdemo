import React from 'react';

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Company组件！'
         };
    }
    render() {
        return (
            <div id="company">
                <h4>{this.state.msg}</h4>
            </div>
        );
    }
}

export default Company;