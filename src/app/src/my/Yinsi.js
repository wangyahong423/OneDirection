import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
class Yinsi extends Component {
  constructor(props){
    super(props);
    this.state={
      checked:false,
      checked1: true
    }
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
         <NavBar
            style={{ width:'100vw',backgroundColor:'#37376f',color:'#fff',position:'fixed ',top:'0',zIndex:1,height:'7vh'}}
            leftContent={[
                <Link to="/shezhi"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>隐私</span>
        </NavBar>
        
        <List.Item
          extra={<Switch
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked,
              });
            }}
            /> }
          style={{margin:'10vh 0 3vh 0'}}
        >允许别人查看我的分享</List.Item>

        <List.Item
          extra={<Switch
            {...getFieldProps('Switch1', {
              initialValue: this.state.checked1,
              valuePropName: 'checked',
              onChange: (val) => {
              },
            })}
            onClick={(checked) => {
              this.props.form.setFieldsValue({
                Switch1: checked,
              });
            }}

          />}
        >允许别人评论我的分享</List.Item>
      </div>
    );
  }
}
const Se = createForm()(Yinsi);
 export default Se;