import React from 'react';
import {Link} from "react-router-dom";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Product组件！',
            list: [
                {
                    aid: 0,
                    title: '商品 - 小鹏G3 2020款主打超长续航'
                },
                {
                    aid: 1,
                    title: '商品 - 美国对法国数字服务税发起301调查'
                },
                {
                    aid: 2,
                    title: '商品 - 中国主要造车新势力与传统汽车关系网一览'
                },
                {
                    aid: 3,
                    title: '商品 - 电竞从业者超50万人'
                }
            ]
         };
    }
    render() {
        return (
            <div id="product">
                <h4>{this.state.msg}</h4>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return(
                                <li key={key}>
                                    <Link to={`/pcontent?aid=${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Product;