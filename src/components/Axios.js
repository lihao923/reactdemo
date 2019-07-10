import React from 'react';
import axios from 'axios';


class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Axios组件！',
            articleList: []
        }
    }

    getData=(e)=> {
        e.preventDefault();

        const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api)
        .then((response) => {
            if(response.data.result) {
                this.setState({
                    articleList: response.data.result
                })
            }

            console.log(this.state.articleList);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div id="axios">
                <h4>{this.state.msg}</h4>
                <button onClick={this.getData}>通过axios获取后台数据</button>
                <hr />
                <ul>
                    {
                        this.state.articleList.map((value,key)=> {
                            return (
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Axios;

