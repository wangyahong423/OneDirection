import React, { Component } from 'react';
import { HashRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar,  TextareaItem,List,SearchBar, InputItem, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;
const Brief = Item.Brief;
class ChangePsd extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div style={{backgroundColor:"#fff",height:"100vh",width:"100vw"}}>
               <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,height:'7vh',textAlign:'center'}}
                    leftContent={[
                    <Link to="/Zhanghao"><span className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                    >
                    <span>更换密码</span>
                </NavBar>
                {/* <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                >密码</InputItem> */}
                <div>
                    <div style={{margin:"10vh 0 3vh 10vw"}}>请输入旧密码：</div>
                    <input style={{height:"5vh",width:"80vw",marginLeft:"10vw",border:"none",borderBottom:"1px solid #D1D1D1",color:"#949494"}}>
                    </input>
                    <div style={{margin:"3vh 0 3vh 10vw"}}>请输入验证码：</div>
                    <input style={{height:"5vh",width:"55vw",marginLeft:"10vw",border:"none",borderBottom:"1px solid #D1D1D1",color:"#949494"}}>
                    </input>
                    <button style={{height:"5vh",width:"25vw",border:"none",fontSize:"2vh"}}>获取验证码
                    </button>
                    <div style={{margin:"10vh 0 3vh 10vw"}}>请输入新密码：</div>
                    <input style={{height:"5vh",width:"80vw",margin:"0 0 10vh 10vw",border:"none",borderBottom:"1px solid #D1D1D1",color:"#949494"}}>
                    </input>
                    <button style={{height:"6vh",width:"70vw",marginLeft:"15vw",border:"none",backgroundColor:"#37376F",color:"#fff"}}>重置</button>
                </div>
            </div>
        )
    }
}
const ChangePsdWrapper = createForm()(ChangePsd);
export default ChangePsdWrapper;