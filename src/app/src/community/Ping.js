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
      cid:parseInt(''),
      name:'',
      content:'',
      yonghu:[],
      pic:[],
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
    var id =this.props.match.params.id;
    let url = `http://localhost:3005/community/list/`+id;
    let url1 = `http://localhost:3005/communitytalk/list/`;
    let url3 = `http://localhost:3005/users/getName`;
    let url4 = `http://localhost:3005/users/list`;
    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
      }) 
    })
    axios(url)
        .then((res)=>{
          for(var i=0;i<res.data.length;i++){
            res.data[i].pic="http://localhost:3005"+res.data[i].pic
          }
          this.setState({            
            data:res.data
          })
          var brr = []
          this.state.data.map((item)=>{
            if(item.id == id){
              brr.push(item);
            }
            this.setState({
              data:brr
            })
          })
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
        axios(url4)
        .then((res)=>{
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].pic = "http://localhost:3005" + res.data[i].pic
          }
          this.setState({
            yonghu:res.data
          })
          
          var qrr=[]
          var a=0;
          for(var i=0;i<this.state.data.length;i++){
            for(var j=0;j<this.state.yonghu.length;j++){
              if(this.state.data[i].name == this.state.yonghu[j].name){
                a=this.state.yonghu[j].pic;
                break;
              }
              else{
                a=0;
              }
            }
            if(a!=0){
              qrr.push(a)
            }
          }
          this.setState({
            pic:qrr
          })
        })
  }
  getContent=(e)=>{
    this.setState({
      cid:this.props.match.params.id,
      content:e.target.value,    
    })

  }
  changeColor(){
    this.setState({
        clicked2:!this.state.clicked2
    })
  }
  render() {
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
                    <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  </div>
                  <div>
                  </div>
                  <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                  <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                  <Link to={`/aboutyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20,fontSize:17 }}>{item.content}</p>
                  </Link>

                </div>)}
          <input placeholder="       添加评论" style={{width:'82%',marginTop:'1vh',height:'37px',borderColor:'red',borderRadius:'15px',border:'none'}} onChange={this.getContent}/>
          <button style={{width:'18%',height:'40px',borderBottomColor:'gray',borderRadius:'30px',backgroundColor:'#3385FF',color:'white',border:'none'}} onClick={this.addItem} >发送</button>
          
          <p style={{fontSize:15,marginLeft:5}}>评论列表</p>
          <hr style={{marginTop:-5}}></hr>  
          {/* <div style={{borderBottom:'1px soild black'}}></div> */}
            {
                this.state.todo.map((item)=>(
                  <div style={{ background: '#fff', color: 'black' }}>
                    <p style={{folat:"left"}}>{item.name}{this.state.data[0].time}</p>
                    <p>{item.content}</p>
                    <div style={{width:'100%',height:'2vh',backgroundColor:'white'}}>
                    </div>           
                  </div>
                )
            )}          
        </div>
       
    );
  }
}

