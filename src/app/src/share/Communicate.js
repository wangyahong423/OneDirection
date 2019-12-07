import React, { Component } from 'react'
import { NavBar,  TextareaItem,List,SearchBar, WingBlank, SegmentedControl} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import { createForm } from 'rc-form';
import '../App.css'
class Communicate extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar style={{backgroundColor:'#37376F',color:'#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center'}}
                leftContent={[
                    <Link to="/StudyCommunicate"><span style={{fontSize:'15px',color:'white'}}>取消</span></Link>
                ]}
                rightContent={[
                    <Link to="/StudyCommunicate"><span style={{fontSize:'15px',color:'white'}}>发送</span></Link>
                ]}>
                发布动态</NavBar> 
                <List renderHeader={() => ''}>
                <TextareaItem
                    {...getFieldProps('count', {
                    initialValue: '',
                    })}
                    rows={5}
                    count={100}
                />
                </List>
            </div>
        )
    }
}
const CommunicateWrapper = createForm()(Communicate);
export default CommunicateWrapper;
