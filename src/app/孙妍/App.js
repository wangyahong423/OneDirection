import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage, Share,
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Login'
import My from './src/my/My';
import SwiperPage from './src/common/SwiperPage';
import Signin from './src/common/Signin';
import Shezhi from './src/my/Shezhi';
import Shoucang from './src/my/Shoucang';
import Tiezi from './src/my/Tiezi';
import Tongxun from './src/my/Tongxun';
import Guanyu from './src/my/Guanyu';
import Fankui from './src/my/Fankui';
import Tijiao from './src/my/Tijiao';
// import Share from './src/share/Share';

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='攻略'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
									
								>
									<Scene key='home' 
										component={Home}
										hideNavBar
									/>
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									title='社区'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key="goods" component={Goods} hideNavBar/>
								</Scene>
								{/** */}
								<Scene key='sharePage' title='共享'  icon={({focused})=><Icon color={focused?'blue':'black'} name='share-alt' size={26} />} >
              						<Scene key='share'  component={Share} />
            					</Scene>
								{/* 用户中心 */}
								
								<Scene 
									key='myPage'
									hideDrawerButton
									icon={({focused})=><Icon color={focused?'blue':'black'} name='user-o' size={26} />}
									title="我的"
								>
									<Scene key="my" component={My} navigationBarStyle={{backgroundColor:'#37376F'}} titleStyle={{flex:1,textAlign:'center',color:'white'}}  />
									{/* <Scene key="shezhi" component={Shezhi} renderTitle="设置" 
										navigationBarStyle={{backgroundColor:'#37376F'}} titleStyle={{flex:1,textAlign:'center',color:'white'}} /> */}
									<Scene key='shoucang' component={Shoucang} title='我的收藏' backButtonImage={require('./assets/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
									<Scene key='tiezi' navigationBarStyle={{backgroundColor:'#37376F'}}  titleStyle={{flex:1,textAlign:'center',color:'white'}}   component={Tiezi} renderTitle="我的帖子"/>
									<Scene key='tongxun' navigationBarStyle={{backgroundColor:'#37376F'}}  titleStyle={{flex:1,textAlign:'center',color:'white'}}   component={Tongxun} renderTitle="通讯录"/>
									<Scene key='guanyu' navigationBarStyle={{backgroundColor:'#37376F'}}  titleStyle={{flex:1,textAlign:'center',color:'white'}}   component={Guanyu} renderTitle="关于我们"/>
									<Scene key='fankui' navigationBarStyle={{backgroundColor:'#37376F'}}  titleStyle={{flex:1,textAlign:'center',color:'white'}}   component={Fankui} renderTitle="用户反馈"/>
									<Scene key='tijiao' navigationBarStyle={{backgroundColor:'#37376F'}}  titleStyle={{flex:1,textAlign:'center',color:'white'}}   component={Tijiao} renderTitle="反馈成功"/>
								</Scene>
								
							</Tabs>
									
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene  key="signin" component={Signin} />
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;