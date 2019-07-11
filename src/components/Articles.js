import React from 'react';
import { Link } from 'react-router-dom';

class Articles extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Articles组件！',
            list: [
                {
                    aid: 0,
                    title: '小鹏G3 2020款主打超长续航,8月底开启分批交付'
                },
                {
                    aid: 1,
                    title: '美国对法国数字服务税发起301调查'
                },
                {
                    aid: 2,
                    title: '中国主要造车新势力与传统汽车关系网一览'
                },
                {
                    aid: 3,
                    title: '电竞从业者超50万人,预计未来五年人才需求近两百万'
                }
            ]
        }
    }

    render() {
        return(
            <div id="articles">
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return(
                                <li key={key}>
                                    <Link to={`/content/${value.aid}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Articles;