import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
class Add extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div style={{position: 'relative'}}>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
                rightContent={[
                  <Link to="/community"><span  style={{fontSize:'15px',color:'white'}}>发送</span></Link>
                ]}
                leftContent={[
                  <Link to="/community"><span style={{fontSize:'15px',color:'white'}}>取消</span></Link>
                ]}
                >
                  <span>发表状态</span>
            </NavBar>
            <List renderHeader={() => ' '}>
          <TextareaItem
            {...getFieldProps(' ', {
              // initialValue: '计数功能,我的意见是...',
            })}
            rows={25}
            // count={100}
          />
        </List>
        </div>
    );
  }
}
const AddWrapper = createForm()(Add);
export default AddWrapper;