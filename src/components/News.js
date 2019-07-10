import React from 'react';
import '../assets/css/index.css';
import logo from '../assets/images/react.jpg'

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            threeBody: ['叶文洁', '章北海', '罗辑', '史强', '常伟思'],
            styleObj: {
                color: 'red',
                fontWeight: 600,
                backgroundColor: 'lightgreen'
            }
        }
    } 

    render() {
        let {threeBody, styleObj } = this.state;
        return (
            <div id="news">
                <ul>
                    {
                        threeBody.map((value, key) => {
                            return <li style={styleObj} className="list" key={key}>{value}</li>
                        })
                    }
                </ul>
                
                <img src={logo}  style={{height: '120px', width: '120px', borderRadius: '50%'}}/>
                <img src={require('../assets/images/react.jpg')}  style={{height: '120px', width: '120px', borderRadius: '50%'}}/>
            </div>
        )
    }
}


export default News;
