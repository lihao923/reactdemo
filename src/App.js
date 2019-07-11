import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./assets/css/App.css";

// 引入组件
import About from './components/About';
import Company from './components/Company';
import Product from './components/Product';
import Articles from './components/Articles';
import Content from './components/Content';
import Pcontent from './components/Pcontent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "App组件！"
        };
    }

    render() {
        return (
            <div id="app">
                <Router>
                    <div className="router-link">
                        <Link to="/">关于我们</Link>
                        <Link to="/company">公司</Link>
                        <Link to="/product">商品</Link>
                        <Link to="/articles">文章</Link>
                    </div>
                    <hr/>
                    <div className="router-view">
                        <Route exact path="/" component={About}/>
                        <Route path="/company" component={Company}/>
                        <Route path="/product" component={Product}/>
                        <Route path="/articles" component={Articles} />
                        <Route path="/pcontent" component={Pcontent} />
                        <Route path="/content/:aid" component={Content}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
