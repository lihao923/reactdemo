import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Product组件！'
         };
    }
    render() {
        return (
            <div id="product">
                <h4>{this.state.msg}</h4>
            </div>
        );
    }
}

export default Product;