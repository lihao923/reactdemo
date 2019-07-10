import React, {Component} from 'react';
import '../assets/css/index.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '这是Form组件！',
            name: '张三',
            gender: 1,
            cities: ['帝都','魔都','霸都','妖都'],
            city: '',
            hobbies: [
                {
                    title: '吃饭',
                    checked: true
                },
                {
                    title: '睡觉',
                    checked: true
                },
                {
                    title: '打豆豆',
                    checked: false
                }
            ],

            infos: ''
        }
    }

    setName=(e)=> {
        console.log()
        this.setState({
            name: e.target.value
        })
    }

    setGender=(e)=> {
        this.setState({
            gender: e.target.value
        })
    }

    setCity=(e)=> {
        this.setState({
            city: e.target.value
        })
    }

    setHobbies=(key)=> {
        let hobbies = this.state.hobbies;
        hobbies[key].checked = !hobbies[key].checked;
        this.setState({
            hobbies
        })
    }

    setInfos=(e)=> {
        this.setState({
            infos: e.target.value
        })
    }

    formSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state.name, this.state.gender, this.state.city, this.state.hobbies, this.state.infos);
    }

    render() {
        return (
            <div id="form">
                <h1>{this.state.msg}</h1>
                <hr />
                <form className="form-box" onSubmit={this.formSubmit}>
                    <div className="form-group">
                        姓名：<input type="text"  value={this.state.name} onChange={this.setName} />
                        <span>{this.state.name}</span>
                    </div>
                    <div className="form-group">
                        性别：
                            <input type="radio" value="1" checked={this.state.gender == 1} onChange={this.setGender} />男  
                            <input type="radio" value="2" checked={this.state.gender == 2} onChange={this.setGender} />女
                    </div>
                    <div className="form-group">
                        现居地：
                            <select value={this.state.city} onChange={this.setCity}>
                                {
                                    this.state.cities.map((value, key)=> {
                                        return (
                                            <option key={key}>{value}</option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                    <div className="form-group">
                        爱好：
                        {
                            this.state.hobbies.map((value, key) =>{
                                return (
                                    <span key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.setHobbies.bind(this, key)} /> {value.title}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className="form-group">
                        <textarea value={this.state.infos} onChange={this.setInfos}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;


