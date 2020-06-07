import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class AddExp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',//名字
      content: '',//内容
      time: new Date().toLocaleString(),
      lvlist:[],
    }
  }
  //内容
  noteCon = (e) => {
    this.setState({ content: e.target.value });

  }
  componentDidMount() {
    let url9 = `http://139.155.44.190:3005/users/getName`;
    let url2 = `http://139.155.44.190:3005/users/list`;
    axios(url9)
      .then((res) => {
        this.setState({
          username: res.data.name
        })
      })
    axios(url2)
      .then((res) => {
        this.setState({
          lvlist: res.data
        })
      })
    
    
  }
  handleRegister = () => {
    if (this.state.content) {
      let url = `http://139.155.44.190:3005/experience/add?content=${this.state.content}&name=${this.state.username}&time=${this.state.time}`;

      axios(url)
        .then((res) => {
          if (res.data.ok) {
            
          } else {
            alert(res.data.msg);
          }
        })
        
    }
    else {
      alert("未填写内容")
    }


  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/experience"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
          ]}
          leftContent={[
            <Link to="/experience"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
          ]}
        >
          <span>发布经验</span>
        </NavBar>

        <List renderHeader={() => ' '} onChange={this.noteCon}>
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '',
            })}
            rows={10}
            count={500}
          />
        </List>

      </div>
    );
  }
}
const AddWrapper = createForm()(AddExp);
export default AddWrapper;