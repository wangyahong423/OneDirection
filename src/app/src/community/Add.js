import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      name: '',
      todo: [],
      time: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    let url3 = `http://139.155.44.190:3005/users/getName`;
    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
      })
  }
  handleRegister = () => {
    if (this.state.content) {
      let url = `http://139.155.44.190:3005/community/addCommunity?content=${this.state.content}&name=${this.state.name}&time=${this.state.time}`;
      axios(url)
        .then((res) => {
          if (res.data.ok) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
    }
    else {
      alert("未填写内容")
    }
  }
  getContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: 'relative' }}>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/community"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
          ]}
          leftContent={[
            <Link to="/community"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
          ]}
        >
          <span>发表状态</span>
        </NavBar>
        <List renderHeader={() => ' '} onChange={this.getContent}>
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
const AddWrapper = createForm()(Add);
export default AddWrapper;