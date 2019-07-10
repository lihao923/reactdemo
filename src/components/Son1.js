import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Son1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Son1组件！'
         };
    }
    render() {
        return (
            <div id="son1">
                <h4>{this.state.msg}</h4>
                <span>{this.props.title}</span>
                <span>{this.props.num}</span>
            </div>
        );
    }
}

// 定义默认props值
Son1.defaultProps = {
    title: '我是Son1组件默认的title！'
}

// 验证props传值类型
Son1.propTypes = {
    num: PropTypes.number
}




export default Son1;
