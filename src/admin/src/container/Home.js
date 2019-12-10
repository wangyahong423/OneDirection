import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Manager from './Manager';
import Users from './Users';
import Learn from './Learn';
import File from './File';
import Community from './Community';
import Feedback from './Feedback';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>用户管理</Link>
          <Link to='/feedback'>用户反馈</Link>
          <Link to='/learn'>学习交流</Link>
          <Link to='/file'>文件管理</Link>
          <Link to='/community'>社区管理</Link>
          <Link to='/manager'>管理员</Link>
        </div>
        <div>
          <Route exact path='/' component={Users} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/learn' component={Learn} />
          <Route path='/file' component={File} />
          <Route path='/community' component={Community} />
          <Route path='/manager' component={Manager} />
        </div>
      </Router>

    )
  }
}
