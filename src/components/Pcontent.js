import React from 'react';
import url from 'url';

class Pcontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Pcontent组件！'
        }
    }

    componentDidMount() {
        console.log(url.parse(this.props.location.search, true).query);
    }

    render() {
        return(
            <div id="pcontent">
                <h4>{this.state.msg}</h4>
            </div>
        )
    }
}

export default Pcontent;