// import React, { Component } from 'react'
// import {  
//     StyleSheet,  
//     View,  
//     Image,  
//     Text,  
//     TouchableHighlight,  
//     Animated,  
//     Easing,  
//     Dimensions,  
//     Picker,  
//     TouchableOpacity,  
//   } from 'react-native'; 
// import { List, InputItem, Picker, Provider } from '@ant-design/react-native'

// const {width, height} = Dimensions.get('window');  
// const navigatorH = 64; // navigator height  
// const [aWidth, aHeight] = [width, 214];  
// const [left, top] = [0, 0]; 

// export default class Choosecollege1 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             offset: new Animated.Value(0),
//             opacity: new Animated.Value(0),
//             choice: this.props.defaultVal,
//             hide: true,
//         };
//         this.options = this.props.options;
//         this.callback = function () { };//回调方法  
//         this.parent = {};
//     }

//     componentWillUnMount() {
//         this.timer && clearTimeout(this.timer);
//     }

//     render() {
//         if (this.state.hide) {
//             return (<View />)
//         } else {
//             return (
//                 <View style={styles.container} >
//                     <Animated.View style={styles.mask} >
//                     </Animated.View>

//                     <Animated.View style={[styles.tip, {
//                         transform: [{
//                             translateY: this.state.offset.interpolate({
//                                 inputRange: [0, 1],
//                                 outputRange: [height, (height - aHeight)]
//                             }),
//                         }]
//                     }]}>
//                         <View style={styles.tipTitleView} >
//                             <Text style={styles.cancelText} onPress={this.cancel.bind(this)}>取消</Text>
//                             <Text style={styles.okText} onPress={this.ok.bind(this)} >确定</Text>
//                         </View>
//                         <Picker
//                             style={styles.picker}
//                             mode={Picker.MODE_DIALOG}
//                             itemStyle={styles.itempicker}
//                             selectedValue={this.state.choice}
//                             onValueChange={choice => this.setState({ choice: choice })}>
//                             {this.options.map((aOption) => <Picker.Item color='#b5b9be' label={aOption} value={aOption} key={aOption} />)}
//                         </Picker>
//                     </Animated.View>
//                 </View>

//             );
//         }
//     }
//     componentDidMount() {  
//     }  
  
//     //显示动画  
//     in() {  
//       Animated.parallel([  
//         Animated.timing(  
//           this.state.opacity,  
//           {  
//             easing: Easing.linear,  
//             duration: 500,  
//             toValue: 0.8,  
//           }  
//         ),  
//         Animated.timing(  
//           this.state.offset,  
//           {  
//             easing: Easing.linear,  
//             duration: 500,  
//             toValue: 1,  
//           }  
//         )  
//       ]).start();  
//     }  
  
//     //隐藏动画  
//     out(){  
//       Animated.parallel([  
//         Animated.timing(  
//           this.state.opacity,  
//           {  
//             easing: Easing.linear,  
//             duration: 500,  
//             toValue: 0,  
//           }  
//         ),  
//         Animated.timing(  
//           this.state.offset,  
//           {  
//             easing: Easing.linear,  
//             duration: 500,  
//             toValue: 0,  
//           }  
//         )  
//       ]).start();  
  
//       this.timer = setTimeout(  
//         () => this.setState({hide: true}),  
//         500  
//       );  
//     }  
  
//     //取消  
//     cancel(event) {  
//       if(!this.state.hide){  
//         this.out();  
//       }  
//     }  
  
//     //选择  
//     ok() {  
//       if(!this.state.hide){  
//         this.out();  
//         this.callback.apply(this.parent,[this.state.choice]);  
//       }  
//     }    
// }

// const styles = StyleSheet.create({  
//     container: {  
//       position:"absolute",  
//       width:width,  
//       height:height,  
//       left:left,  
//       top:top,  
//     },  
//     mask: {  
//       justifyContent:"center",  
//       backgroundColor:"#383838",  
//       opacity:0.8,  
//       position:"absolute",  
//       width:width,  
//       height:height,  
//       left:left,  
//       top:top,  
//     },  
//     tip: {  
//       width:aWidth,  
//       height:aHeight,  
//       // left:middleLeft,  
//       backgroundColor:"#fff",  
//       alignItems:"center",  
//       justifyContent:"space-between",  
//     },  
//     tipTitleView: {  
//       height:53,  
//       width:aWidth,  
//       flexDirection:'row',  
//       alignItems:'center',  
//       justifyContent:'space-between',  
//       borderBottomWidth:0.5,  
//       borderColor:"#f0f0f0",  
  
//     },  
//     cancelText:{  
//       color:"#e6454a",  
//       fontSize:16,  
//       paddingLeft:30,  
//     },  
//     okText:{  
//       color:"#e6454a",  
//       fontSize:16,  
//       paddingRight:27,  
//       fontWeight:'bold',  
//     },  
//     picker:{  
//       justifyContent:'center',  
//       // height: 216,//Picker 默认高度  
//       width:aWidth,  
//     },  
//     itempicker:{  
//       color:'#e6454a',  
//       fontSize:19,  
//       height:161  
//     }  
//   });  