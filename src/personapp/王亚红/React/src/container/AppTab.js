import React from 'react';
import { TabBar } from 'antd-mobile';
import Method from '../method/Method';
import Community from '../community/Community';
import Share from '../share/Share';
import My from '../my/My';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'method',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar unselectedTintColor="#949494" tintColor="#343466" barTintColor="white">
          <TabBar.Item
            title="攻略"
            key="Method"
            icon={<i className='iconfont icon-gonglve' style={{ fontSize: 22, lineHeight: '22px' }}></i>}
            selectedIcon={<i style={{ fontSize: 22, lineHeight: '22px', color: '#3fcccb' }} className='iconfont icon-gonglve'></i>
            }
            selected={this.state.selectedTab === 'method'}
            onPress={() => {
              window.location.href='http://localhost:3000/method'

              this.setState({
                selectedTab: 'method',
              });
            }}
          >
            <Method />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-buoumaotubiao02' style={{ fontSize: 22, lineHeight: '22px' }}></i>}
            selectedIcon={<i style={{ fontSize: 22, lineHeight: '22px', color: '#3fcccb' }} className='iconfont icon-buoumaotubiao02'></i>
            }
            title="社区"
            key="Community"
            selected={this.state.selectedTab === 'community'}
            onPress={() => {
              window.location.href='http://localhost:3000/community'

              this.setState({
                selectedTab: 'community',
              });
            }}
          >
            <Community selected={this.state.selectedTab} />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-fenxiang' style={{ fontSize: 22, lineHeight: '22px' }}></i>}
            selectedIcon={<i style={{ fontSize: 22, lineHeight: '22px', color: '#3fcccb' }} className='iconfont icon-fenxiang'></i>
            }
            title="共享"
            key="Share"
            selected={this.state.selectedTab === 'share'}
            onPress={() => {
              window.location.href='http://localhost:3000/Share'

              this.setState({
                selectedTab: 'share',
              });
            }}
          >
            <Share />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-wode' style={{ fontSize: 22, lineHeight: '22px' }}></i>}
            selectedIcon={<i style={{ fontSize: 22, lineHeight: '22px', color: '#3fcccb' }} className='iconfont icon-wode'></i>
            }
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              window.location.href='http://localhost:3000/My'

              this.setState({
                selectedTab: 'my',
              });
            }}
          >
            <My />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}