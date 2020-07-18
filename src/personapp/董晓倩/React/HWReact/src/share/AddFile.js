import React, { Component } from 'react'
import { List, Checkbox, NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
const CheckboxItem = Checkbox.CheckboxItem;
export default class AddFile extends Component {
    onChange = (val) => {
    }
    render() {
        const data = [
            {
                value: 0,
                label: <div style={{ height: "8vh", lineHeight: "8vh", width: "100%", float: "left" }}>
                    <div style={{ margin: "0 5vw 0 5vw", fontSize: "40px", color: "#1c57a5", float: "left" }} className="iconfont icon-word"></div>
                    <div style={{ height: "4vh", width: "40vw", margin: "2vh 0 2vh 0", float: "left", lineHeight: "4vh" }}>
                        <span style={{ fontSize: "18px", fontFamily: "微软雅黑" }}>复习资料</span>&nbsp;&nbsp;
                            <span style={{ fontSize: "13px" }}>516k</span>
                    </div>
                </div>
            },
            {
                value: 1,
                label: <div style={{ height: "8vh", lineHeight: "8vh", width: "100%", float: "left" }}>
                    <div style={{ margin: "0 5vw 0 5vw", fontSize: "40px", color: "#e24c4c", float: "left" }} className="iconfont icon-ppt"></div>
                    <div style={{ height: "4vh", width: "40vw", margin: "2vh 0 2vh 0", float: "left", lineHeight: "4vh" }}>                                <span style={{ fontSize: "18px", fontFamily: "微软雅黑" }}>复习资料</span>&nbsp;&nbsp;
                            <span style={{ fontSize: "13px" }}>516k</span>
                    </div>
                </div>
            },
            {
                value: 2,
                label: <div style={{ height: "8vh", lineHeight: "8vh", width: "100%", float: "left" }}>
                    <div style={{ margin: "0 5vw 0 5vw", fontSize: "40px", color: "#960d0d", float: "left" }} className="iconfont icon-pdf2"></div>
                    <div style={{ height: "4vh", width: "40vw", margin: "2vh 0 2vh 0", float: "left", lineHeight: "4vh" }}>
                        <span style={{ fontSize: "18px", fontFamily: "微软雅黑" }}>复习资料</span>&nbsp;&nbsp;
                            <span style={{ fontSize: "13px" }}>516k</span>
                    </div>
                </div>
            },
        ];
        return (
            <div>
                <div>
                    <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center' }}
                        leftContent={[
                            <Link to="/Word"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                        ]}>
                        资料共享</NavBar>
                </div>
                <div>
                    <List renderHeader={() => '选择要上传的文件'}>
                        {data.map(i => (
                            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                                {i.label}
                            </CheckboxItem>
                        ))}
                    </List>
                </div>
                <Link to="/MaterialSharing">
                    <button className="button">发送</button>
                </Link>
            </div>
        )
    }
}
