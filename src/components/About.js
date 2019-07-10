import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'About组件！'
         };
    }
    render() {
        return (
            <div id="about">
                <h4>{this.state.msg}</h4>
            </div>
        );
    }
}

export default About;