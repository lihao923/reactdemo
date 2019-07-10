import React from 'react';
import fetchJsonp from 'fetch-jsonp'; 

class FetchJsonp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'FetchJsonp组件！',
            articleList: []
         };
    }

    getData=(e)=> {
        // e.preventDefault();
        const api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api).then((response) => {
            return response.json();
        }).then((json) => {
            if(json.result) {
                this.setState({
                    articleList: json.result
                });
            }
            console.log(this.state.articleList);
        }).catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        return (
            <div id="fetchjsonp">
                <h4>{this.state.msg}</h4>
                <button onClick={this.getData}>通过fetchJsonp获取后台数据</button>
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
        );
    }
}

export default FetchJsonp;