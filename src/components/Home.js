import React, { Component } from 'react';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '叶文洁'
        }

        // this.getName = this.getName.bind(this);
    }

    run() {
        alert('我是run方法！');
    }

    getName=()=>{
        alert(this.state.name);
    }

    setName=(name)=> {
        this.setState({
            name:name
        })
    }

    render() {
        return (
            <div id="home">
                <h1>姓名：{this.state.name}</h1>
                <div className="event">
                    
                    <button type="button" onClick={this.run}>执行方法</button>
                    {/* <button type="button" onClick={this.getName.bind(this)}>获取名字</button> */}
                    <button type="button" onClick={this.getName}>获取名字</button>
                    <button type="button" onClick={this.setName.bind(this, '托马斯·维德')}>设置名字</button>
                    
                </div>
            </div>
        )
    }
}


export default Home;
