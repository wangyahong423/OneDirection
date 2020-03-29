import React, { Component } from 'react'
import CommunicataDetails from "./CommunicataDetails"
import { NavBar, List, InputItem, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';

class Comment extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <CommunicataDetails />
                <List renderHeader={() => ''} style={{ position: "fixed", top: "84%", width: "100vw" }}>
                    <InputItem
                        {...getFieldProps('inputclear')}
                        clear
                    ></InputItem>
                </List>
            </div>
        )
    }
}
const CommentWrapper = createForm()(Comment);
export default CommentWrapper;