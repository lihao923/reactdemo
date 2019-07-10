import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./assets/css/App.css";

// 引入组件
import About from './components/About';
import Company from './components/Company';
import Product from './components/Product';
import Articles from './components/Articles';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "App组件！"
    };
  }
  render() {
    return (
      <Router>
        <div className="router-link">
          <Link to="/">About</Link>
          <Link to="/company">Company</Link>
          <Link to="/product">Product</Link>
          <Link to="/articles">Articles</Link>
        </div>
        <hr />
        <div className="router-view">
          <Route exact path="/" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/product" component={Product} />
          <Route path="/articles" component={Articles} />
        </div>
      </Router>
    );
  }
}

export default App;
