import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class AddNotes extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      name: '',//名字
      title: '',//标题
      content: '',//内容
      time: new Date().toLocaleString(),
      level: ''

    }
  }
  //标题
  titleCon = (e) => {
    this.setState({ title: e.target.value });

  }
  //内容
  noteCon = (e) => {
    this.setState({ content: e.target.value });

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
    if (this.state.content && this.state.title) {
      let url = `http://139.155.44.190:3005/notes/addNote?content=${this.state.content}&name=${this.state.name}&time=${this.state.time}&title=${this.state.title}&show=${this.state.title}`;

      axios(url)
        .then((res) => {
          if (res.data.ok) {
            let url2 = `http://139.155.44.190:3005/users/list`;
            axios(url2)
              .then((res) => {
                this.setState({
                  data: res.data
                })
              })
          }
          else {
            alert("未填写内容");
          }
        })
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: 'relative' }} >
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/notes"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
          ]}
          leftContent={[
            <Link to="/notes"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
          ]}
        >
          <span>发布笔记</span>
        </NavBar>
        <input type="text" placeholder="请输入标题" onChange={this.titleCon} style={{ width: '99%', height: '7vh', marginTop: '3vh', borderRadius: 10 }} />
        <List renderHeader={() => ' '} onChange={this.noteCon}>
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '',
            })}
            rows={10}
            count={500}
          />
        </List>

      </div >
    );
  }
}
const AddWrapper = createForm()(AddNotes);
export default AddWrapper;