import React, { Component } from 'react'
import Login from './Login'
import Home from './Houtai/Home';
import Yonghu from './Houtai/Yonghu';
import Xuexi from './Houtai/Xuexi';
import Wenjian from './Houtai/Wenjian';
import Shequ from './Houtai/Shequ';
import Guanliyuan from './Houtai/Guanliyuan';
import {BrowserRouter as Router,Route} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/yonghu" component={Yonghu}/>
                <Route path="/xuexi" component={Xuexi}/>
                <Route path="/wenjian" component={Wenjian}/>
                <Route path="/shequ" component={Shequ}/>
                <Route path="/guanliyuan" component={Guanliyuan}/>
            </Router>
        )
    }
}
