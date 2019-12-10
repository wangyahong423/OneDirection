import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        content: 'fabiao111111',
        name: '11',
        clicks:5,
        time: new Date().toLocaleString(),
        // pic:7,
    }
}
handleRegister = () => {
    let url = `http://localhost:3005/community/addCommunity?content=${this.state.content}&name=${this.state.name}&time=${this.state.time}&clicks=${this.clicks}`;
    axios(url)
        .then((res) => {
          console.log(this.state.content);
            if (res.data.ok) {
              console.log(7);
                alert(res.data.msg);
            } else {
              console.log(8);
                alert(res.data.msg);
            }
        })
}
getContent = (e) => {
    this.setState({
        content: e.target.value
    })
    console.log(e.target.value)
}
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div style={{position: 'relative'}}>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
                rightContent={[
                  <Link to="/community"><span  style={{fontSize:'15px',color:'white'}} onClick={this.handleRegister}>发送</span></Link>
                ]}
                leftContent={[
                  <Link to="/community"><span style={{fontSize:'15px',color:'white'}}>取消</span></Link>
                ]}
                >
                  <span>发表状态</span>
            </NavBar>
            <List renderHeader={() => ' '} onChange={this.getContent}>
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '',
            })}
            rows={25}
            count={100}
          />
        </List>
        </div>
    );
  }
}
const AddWrapper = createForm()(Add);
export default AddWrapper;