import React, { Component } from 'react'
import { NavBar, TextareaItem, List, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { createForm } from 'rc-form';
import '../App.css';
import axios from 'axios';

class Communicate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            name: '',
            time: new Date().toLocaleString(),
            // pic:1,
        }
    }
    handleRegister = () => {
        let url = `http://localhost:3005/learn/addLearn?content=${this.state.content}
        &name=${this.state.name}&time=${this.state.time}`;
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
        this.setState({
            content: e.target.value
        })
        console.log(e.target.value)
    }
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }
    getTime = (e) => {
        this.setState({
            time: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center' }}
                    leftContent={[
                        <Link to="/StudyCommunicate"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
                    ]}
                    rightContent={[
                        <Link to="/StudyCommunicate"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
                    ]}>
                    发布动态</NavBar>
                <List renderHeader={() => ''} onChange={this.getContent}>
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
