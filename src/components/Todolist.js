import React, {Component} from 'react';
import storage from '../assets/js/storage';
import '../assets/css/todolist.css';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'MY TODOLIST',
            list: [
                {
                    title: '吃饭',
                    checked: false
                },
                {
                    title: '睡觉',
                    checked: true
                },
                {
                    title: '打豆豆',
                    checked: false
                }
            ]
        }
    }

    addTodo=(e)=> {
        let tempList = this.state.list;
        if(e.keyCode === 13) {
            tempList.unshift({title: this.refs.todoItem.value.trim(),checked: false});
            // console.log(tempList);
            this.refs.todoItem.value = '';

            this.setState({
                list: tempList
            })
            // console.log(this.state.list);
        }

        storage.set('list', this.state.list);
    }

    removeTodo=(key)=> {
        let tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList
        })

        storage.set('list', this.state.list);
    }

    setCheckbox=(key)=> {
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked
        this.setState({
            list: tempList
        })

        storage.set('list', this.state.list);
    }

    componentDidMount() {
        const list = storage.get('list');
        if(list) {
            this.setState({
                list: list
            })
        }
    }

    render() {
        return (
            <div id="todolist">
                <h4>{this.state.msg}</h4>
                <hr />
                <div className="todolist-box">
                    <div className="todo-input">
                        <input type="text" ref="todoItem" onKeyUp={this.addTodo} placeholder="请输入待办事项，并按Enter键" />
                    </div>
                    <div className="doing-box">
                        <h3 className="doing-title">正在进行...</h3>
                        <ul className="doing-list">
                            {
                                this.state.list.map((value, key) => {
                                    if(!value.checked) {
                                        return (
                                            <li className="doing-item" key={key}>
                                                <p>
                                                    <input type="checkbox" checked={value.checked} onChange={this.setCheckbox.bind(this, key)}/>
                                                    <span title={value.title}>{value.title}</span>
                                                </p>
                                                <button onClick={this.removeTodo.bind(this, key)}>删除</button>
                                            </li> 
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className="done-box">
                        <h3 className="done-title">已经完成...</h3>
                        <ul className="done-list">
                            {
                                this.state.list.map((value, key) => {
                                    if(value.checked) {
                                        return (
                                            <li className="done-item" key={key}>
                                                <p>
                                                    <input type="checkbox" checked={value.checked} onChange={this.setCheckbox.bind(this, key)} />
                                                    <span title={value.title}>{value.title}</span>
                                                </p>
                                                <button onClick={this.removeTodo.bind(this, key)}>删除</button>
                                            </li> 
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todolist;
