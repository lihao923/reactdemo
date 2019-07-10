import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'Articles组件！',
            articlesList : [
                {
                    aid: 0,
                    title: 'blablablabla'
                },
                {
                    aid: 1,
                    title: 'dadadadadadada'
                },
                {
                    aid: 2,
                    title: 'hahahahahaha'
                }
            ]
         };
    }
    render() {
        return (
            <div id="articles">
                <Router>
                    <ul>
                        {
                            this.state.articlesList.map((value, key) => {
                                return(
                                    <li key={key}>
                                        <Link to={`/content/${value.aid}`}>{value.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Router>
            </div>
        );
    }
}

export default Articles;