import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class AddNotes extends Component {

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ position: 'relative' }}>
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
        <List renderHeader={() => ' '} >
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '标题',
            })}
            rows={1}
            count={10}
          />

        </List>
        <List renderHeader={() => ' '} >
          <TextareaItem
            {...getFieldProps(' ', {
              initialValue: '',
            })}
            rows={10}
            count={500}
          />
        </List>

      </div>
    );
  }
}
const AddWrapper = createForm()(AddNotes);
export default AddWrapper;