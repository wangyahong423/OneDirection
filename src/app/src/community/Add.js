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
        content: '',
        name: '',
        pic:'',
        clicks:5,
        todo:[],
        time: new Date().toLocaleString()
    }
}

componentDidMount(){
  let url3 = `http://localhost:3005/users/getName`;
  axios(url3)
    .then((res) => {
      this.setState({
        name: res.data.name
    }) 
    })
    let url2 = `http://localhost:3005/users/list`;
    axios(url2)
        .then((res) => {
            this.setState({
                todo: res.data
            })
            this.state.todo.map((item)=>{
                if(item.name == this.state.name){
                    this.setState({
                        pic:item.pic
                    })
                }
            })
        })
    console.log(this.state.pic)
}
handleRegister = () => {
    let url = `http://localhost:3005/community/addCommunity?content=${this.state.content}&name=${this.state.name}&time=${this.state.time}&clicks=${this.state.clicks}&pic=${this.state.pic}`;
    console.log(url);
    axios(url)
        .then((res) => {
            if (res.data.ok) {
              alert(res.data.msg);
            } else {
              alert(res.data.msg);
            }
        })
      
     

}
getContent = (e) => {
    console.log(e.target.value)
    this.setState({
        content: e.target.value
    })    
}
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div style={{position: 'relative'}}>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
                rightContent={[
                  <Link to="/community"><span  style={{fontSize:'15px',color:'white'}} onClick={this.handleRegister}>发送</span></Link>
                  // <span  style={{fontSize:'15px',color:'white'}} onClick={this.handleRegister}>发送</span>
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
            rows={5}
            count={100}
          />
        </List>
        </div>
    );
  }
}
const AddWrapper = createForm()(Add);
export default AddWrapper;