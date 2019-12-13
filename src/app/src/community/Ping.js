import React, { Component } from 'react';
import {NavBar,ActionSheet} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios'
export default class Ping extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      todo:[],
      clicked2: true,
      cid:18,
      name:'',
      content:''
    };
  }
  dataList = [
    { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      message: '分享',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      return new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    });
  } 
  addItem=()=>{
    let url = `http://localhost:3005/communitytalk/add?cid=${this.state.cid}
    &name=${this.state.name}&content=${this.state.content}`;
    axios(url)
        .then((res) => {
            if (res.data.ok) {
                alert(res.data.msg);
                window.location.reload();
            } else {
                alert(res.data.msg);
            }
        })
    
  }
  componentDidMount() {
    console.log(this.state.data);
    var id =this.props.match.params.id;
    console.log(this.props)
    console.log(id)
    let url = `http://localhost:3005/community/list/`+id;
    let url1 = `http://localhost:3005/communitytalk/list/`;
    axios(url)
        .then((res)=>{
          this.setState({
            data:res.data
          })
          console.log(this.state.data)
          var brr = []
          this.state.data.map((item)=>{
            if(item.id == id){
              brr.push(item);
            }
            this.setState({
              data:brr
            })
          })
          console.log(this.state.data);
        })
    axios(url1)
        .then((res) => {
            this.setState({
              todo: res.data.communitytalk                      
            })
            var arr = [];
              this.state.todo.map((item)=>{
                if(item.cid == id){
                  arr.push(item);                 
                }
                this.setState({
                  todo:arr
                })
            })
        })
  }
  getContent=(e)=>{
    this.setState({
        content:e.target.value
    })
  }
  changeColor(){
    this.setState({
        clicked2:!this.state.clicked2
    })
  }
  render() {
    let color1 = {
      color: this.state.clicked2 ? "black" : "red",
      fontSize: '3vh',
      marginLeft: '23%'
    }
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{  backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh'}}
            leftContent={[
                <Link to="/community"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>评论</span>
        </NavBar>
            {
              this.state.data.map((item, idx) =>
                <div style={{height: '20vh',background: '#fff', color: 'black' }}>
                  <div style={{ float: "left" }}>
                    <img src={require('./img/touxiang2.jpg')} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  </div>
                  <div>
                  </div>
                  <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                  <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                  <Link to={`/aboutyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20,fontSize:17 }}>{item.content}</p>
                  </Link>

                </div>)}
          <input placeholder="       添加评论" style={{width:'82%',marginTop:'1vh',height:'37px',borderBottomColor:'gray'}} onChange={this.getContent}/>
          <button style={{width:'16%',marginTop:'vh',height:'42px',borderBottomColor:'gray'}} onClick={this.addItem}>发送</button>
          <span style={{fontSize:15}}>评论列表</span>
          <hr ></hr>  
          <div marginTop="4vh">
            {
                this.state.todo.map((item)=>(
                  <div style={{ background: '#fff', color: 'black' }}>
                    <div style={{ float: "left" }}>
                      <img src={require('./img/touxiang.jpg')} style={{ height: '5vh', width: '9vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                    </div>
                    <p style={{ marginLeft: 25, fontSize: '2vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                    <div style={{ marginLeft: 25, color: 'gray', fontSize: '3vw', marginTop: "-5vw" }}>{this.state.data[0].time}
                    </div>
                    <p style={{ marginLeft: 30, color: 'black', marginTop: 10,fontSize:15 }}>{item.content}</p>            
                  </div>
                )
            )}
              
          </div>
        
        </div>
       
    );
  }
}

