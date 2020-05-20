import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert, DrawerLayoutAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Experience extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            all: [],
            pic: [],
            like: [],
            collect: [],
            search: '',
            likeNum: [],
            colNum: [],
            username: '',
            isLoading: true
        };
        this.getData();
    }
    getData = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        var url1 = `http://139.155.44.190:3005/experience/list`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ pic: res });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ likeNum: res });
                        var likeList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                likeList.push(res[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                this.setState({ colNum: res });
                                var colList = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.username) {
                                        colList.push(res[i]);
                                    }
                                }
                                this.setState({ collect: colList });
                                fetch(url1)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        res.forEach(item => {
                                            for (var i = 0; i < this.state.pic.length; i++) {
                                                if (item.name == this.state.pic[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                    item.college = this.state.pic[i].college;
                                                    item.level = this.state.pic[i].level;
                                                    item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                    break;
                                                }
                                            }
                                            item.like = false;
                                            for (var j = 0; j < this.state.like.length; j++) {
                                                if (item.id == this.state.like[j].eid) {
                                                    item.like = true;
                                                    break;
                                                }
                                                else {
                                                    item.like = false;
                                                }
                                            }
                                            var likeNum = 0;
                                            for (var z = 0; z < this.state.likeNum.length; z++) {
                                                if (item.id == this.state.likeNum[z].eid) {
                                                    likeNum++;
                                                }
                                            }
                                            item.likeNum = likeNum;
                                            item.collect = false;
                                            for (var j = 0; j < this.state.collect.length; j++) {
                                                if (item.id == this.state.collect[j].eid) {
                                                    item.collect = true;
                                                    break;
                                                }
                                                else {
                                                    item.collect = false;
                                                }
                                            }
                                            var colNum = 0;
                                            for (var z = 0; z < this.state.colNum.length; z++) {
                                                if (item.id == this.state.colNum[z].eid) {
                                                    colNum++;
                                                }
                                            }
                                            item.colNum = colNum;
                                            // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                        });
                                        this.setState({ isLoading: false });
                                        this.setState({ list: res });
                                        this.setState({ all: res });
                                    });
                            });
                    });
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('Erefresh', function (param) {
            // var arr=self.state.list;
            // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
            // arr.splice(0,0,a);
            // self.setState({list:arr});
            fetch(url3)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({ pic: res });
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            self.setState({ likeNum: res });
                            var likeList = [];
                            for (var i = 0; i < res.length; i++) {
                                if (res[i].name == self.state.username) {
                                    likeList.push(res[i]);
                                }
                            }
                            self.setState({ like: likeList });
                            fetch(url4)
                                .then((res) => res.json())
                                .then((res) => {
                                    self.setState({ colNum: res });
                                    var colList = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == self.state.username) {
                                            colList.push(res[i]);
                                        }
                                    }
                                    self.setState({ collect: colList });
                                    fetch(url1)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            res.forEach(item => {
                                                for (var i = 0; i < self.state.pic.length; i++) {
                                                    if (item.name == self.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                        item.college = self.state.pic[i].college;
                                                        item.level = self.state.pic[i].level;
                                                        item.head = 'http://139.155.44.190:3005/head/' + self.state.pic[i].head;
                                                        break;
                                                    }
                                                }
                                                item.like = false;
                                                for (var j = 0; j < self.state.like.length; j++) {
                                                    if (item.id == self.state.like[j].eid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var z = 0; z < self.state.likeNum.length; z++) {
                                                    if (item.id == self.state.likeNum[z].eid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                item.collect = false;
                                                for (var j = 0; j < self.state.collect.length; j++) {
                                                    if (item.id == self.state.collect[j].eid) {
                                                        item.collect = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.collect = false;
                                                    }
                                                }
                                                var colNum = 0;
                                                for (var z = 0; z < self.state.colNum.length; z++) {
                                                    if (item.id == self.state.colNum[z].eid) {
                                                        colNum++;
                                                    }
                                                }
                                                item.colNum = colNum;
                                                // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                            });
                                            self.setState({ isLoading: false });
                                            self.setState({ list: res });
                                            self.setState({ all: res });
                                        });
                                });
                        });
                });
        });
        // var self1 = this;
        // this.listener1 = DeviceEventEmitter.addListener('com', function (num){
        //     console.log(num);
        // })
    }

    componentWillUnmount() {
        this.listener.remove();
        // this.listener1.remove();
    }
    delete = (idx) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, (this.state.list[idx].id)) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
    }
    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
        let url1 = `http://139.155.44.190:3005/experiencelike/deleteAll?eid=${id}`;
        let url2 = `http://139.155.44.190:3005/collect/deleteAll?eid=${id}`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                                Alert.alert(res.msg);
                                var param = 1;
                                DeviceEventEmitter.emit('Erefresh', param);
                            });
                    });
            });
    }
    opntion2 = () => {

    }
    details = (idx) => {
        var value = { name: this.state.list[idx].name, time: this.state.list[idx].time, content: this.state.list[idx].content, pic: this.state.list[idx].pic, level: this.state.list[idx].level,head: this.state.list[idx].head };
        AsyncStorage.setItem('EPage', JSON.stringify(value));
        Actions.expdetails();
    }
    like = (idx) => {
        var crr = '';
        if (this.state.list[idx].like == false) {
            crr = this.state.list;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
                });
        }
        else if (this.state.list[idx].like == true) {
            crr = this.state.list;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
        }
        let url2 = `http://139.155.44.190:3005/users/list`;
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    lvlist: res
                });
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            lvnum: item.lvnum + 1
                        })
                        let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                            });
                        if (this.state.lvnum == 15) {
                            Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 30) {
                            Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 45) {
                            Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 60) {
                            Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 75) {
                            Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 90) {
                            Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 105) {
                            Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 120) {
                            Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 135) {
                            Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                        }
                    }
                })
            })
    }
    collect = (idx) => {
        var crr = '';
        if (this.state.list[idx].collect == false) {
            crr = this.state.list;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
                });
        }
        else if (this.state.list[idx].collect == true) {
            crr = this.state.list;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
        }
        let url2 = `http://139.155.44.190:3005/users/list`;
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    lvlist: res
                });
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            lvnum: item.lvnum + 1
                        })
                        let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                            });
                        if (this.state.lvnum == 15) {
                            Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 30) {
                            Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 45) {
                            Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 60) {
                            Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 75) {
                            Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 90) {
                            Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 105) {
                            Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 120) {
                            Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 135) {
                            Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                        }
                    }
                })
            })
    }
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = () => {
        console.log(this.state.search);
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ pic: res });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ likeNum: res });
                        var likeList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                likeList.push(res[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                this.setState({ colNum: res });
                                var colList = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.username) {
                                        colList.push(res[i]);
                                    }
                                }
                                this.setState({ collect: colList });
                                fetch(url)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        if (res.false) {
                                        }
                                        else {
                                            res.forEach(item => {
                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                    if (item.name == this.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                        item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;

                                                        break;
                                                    }
                                                }
                                                item.like = false;
                                                for (var j = 0; j < this.state.like.length; j++) {
                                                    if (item.id == this.state.like[j].eid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var z = 0; z < this.state.likeNum.length; z++) {
                                                    if (item.id == this.state.likeNum[z].eid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                item.collect = false;
                                                for (var j = 0; j < this.state.collect.length; j++) {
                                                    if (item.id == this.state.collect[j].eid) {
                                                        item.collect = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.collect = false;
                                                    }
                                                }
                                                var colNum = 0;
                                                for (var z = 0; z < this.state.colNum.length; z++) {
                                                    if (item.id == this.state.colNum[z].eid) {
                                                        colNum++;
                                                    }
                                                }
                                                item.colNum = colNum;
                                            });
                                            this.setState({ list: res });
                                        }
                                    });
                            });
                    });
            });

    }
    classify = (data) => {
        if (data == '全部') {
            this.setState({ list: this.state.all });
        }
        else {
            var arr = [];
            for (var i = 0; i < this.state.all.length; i++) {
                if (this.state.all[i].college == data) {
                    arr.push(this.state.all[i]);
                }
            }
            this.setState({ list: arr });
        }
    }
    // cla = () => {
    //     this.refs['list'].style.display='flex';
    //     console.log(1);
    // }
    onPenLeftDrawer() {
        this.drawer.openDrawer();
    }

    closeLeftDrawer() {
        this.drawer.closeDrawer();
    }

    person = (idx) => {
        var value = { name: this.state.list[idx].name, pic: this.state.list[idx].pic, level: this.state.list[idx].level, college: this.state.list[idx].college,head: this.state.list[idx].head };
        AsyncStorage.setItem('details', JSON.stringify(value));
        Actions.person();
    }
    render() {
        var navigationView = (
            <View style={{ backgroundColor: '#fff', marginBottom: 10 * s }}>
                <FlatList
                    data={[
                        { key: '全部' },
                        { key: '马克思主义学院' },
                        { key: '历史文化学院' },
                        { key: '美术与设计学院' },
                        { key: '商学院' },
                        { key: '法政与公共管理学院' },
                        { key: '化学与材料科学学院' },
                        { key: '体育学院' },
                        { key: '国际文化交流学院' },
                        { key: '初等教育系' },
                        { key: '软件学院' },
                        { key: '教育学院' },
                        { key: '外国语学院' },
                        { key: '新闻传播学院' },
                        { key: '数学与信息科学学院（田家炳教育书院）' },
                        { key: '生命科学学院' },
                        { key: '计算机与网络空间安全学院、计算机教学部' },
                        { key: '教师教育学院' },
                        { key: '大学外语教学部' },
                        { key: '汇华学院' },
                        { key: '文学院' },
                        { key: '音乐学院' },
                        { key: '物理学院' },
                        { key: '资源与环境科学学院' },
                        { key: '职业技术学院、中燃工学院' },
                        { key: '学前教育学院（旅游系）' },
                        { key: '公共体育教学部' }
                    ]}
                    horizontal={false}
                    numColumns={1}
                    // columnWrapperStyle={styles.columnStyle}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ backgroundColor: '#eee', margin: 5 * s, height: 20 * s }} onPress={this.classify.bind(this, (item.key))}>
                            <Text style={{
                                // color: 'white',
                                backgroundColor: 'blur'
                            }}>{item.key}</Text>
                        </TouchableOpacity>
                    }
                />
            </View >
        );
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    width: '100%',
                    height: 70 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#D7D3D3',
                        borderRadius: 28 * s

                    }}>
                        <Icon
                            style={{
                                marginLeft: 25 * s,
                                marginRight: 20 * s
                            }}
                            onPress={this.search}
                            color='#fff' size={20} name='search' />
                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "80%",
                                padding: 0,
                                fontSize: 15 * s
                            }}
                            clearButtonMode="while-editing"
                            // autoFocus={true}
                            placeholderTextColor='#fff'
                            placeholder="请输入您要搜索的关键字"
                            onChangeText={this.change}
                        />
                    </View>

                </View>
                <DrawerLayoutAndroid
                    ref={(drawer) => {
                        this.drawer = drawer;
                    }}
                    drawerWidth={350 * s}
                    drawerPosition={'left'}
                    renderNavigationView={() => navigationView}>
                    <View style={{ width: 50 * s, height: 25 * s, borderRadius: 10 * s, backgroundColor: '#37376F', alignItems: 'center', justifyContent: 'center', marginLeft: 10 * s }}>
                        <TouchableOpacity
                            // underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            // style={styles.touchable}
                            onPress={() => this.onPenLeftDrawer()}
                            style={{}}
                        //onPress={this.onPenLeftDrawer.bind(this)}
                        >
                            <Text style={{ fontSize: 16, color: '#fff' }}>分类</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        <View>
                            {
                                this.state.list.map((item, idx) => (
                                    <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            height: 80 * s,
                                            alignItems: 'center'
                                        }}>
                                            {
                                                this.state.username == item.name
                                                    ?
                                                    <View>
                                                        <Image style={{
                                                            marginLeft: 20 * s,
                                                            height: 50 * s,
                                                            width: 50 * s,
                                                            borderRadius: 25 * s,
                                                            backgroundColor: 'yellow'
                                                        }} source={{ uri: item.pic }} />
                                                        <Image style={{
                                                            height: 70 * s,
                                                            width: 70 * s,
                                                            borderRadius: 35 * s,
                                                            // backgroundColor:'green',
                                                            position: 'absolute',
                                                            top: -10,
                                                            right: -10
                                                        }}
                                                            source={{ uri: item.head }} />
                                                    </View>
                                                    : <TouchableOpacity onPress={this.person.bind(this, (idx))}>
                                                        <Image style={{
                                                            marginLeft: 20 * s,
                                                            height: 50 * s,
                                                            width: 50 * s,
                                                            borderRadius: 25 * s,
                                                            backgroundColor: 'yellow'
                                                        }} source={{ uri: item.pic }} />
                                                        <Image style={{
                                                            height: 70 * s,
                                                            width: 70 * s,
                                                            borderRadius: 35 * s,
                                                            // backgroundColor:'green',
                                                            position: 'absolute',
                                                            top: -10,
                                                            right: -10
                                                        }}
                                                            source={{ uri: item.head }} />
                                                    </TouchableOpacity>
                                            }
                                            <View style={{ marginLeft: 30 * s }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                    <Text style={{ fontSize: 15 * s, marginLeft: 10 * s, color: 'red' }}>Lv.{item.level}</Text>
                                                </View>
                                                <Text>{item.time}</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            marginLeft: 30 * s,
                                            marginRight: 30 * s,
                                            marginTop: 10 * s,
                                            marginBottom: 20 * s
                                        }}
                                        >
                                            <Text onPress={this.details.bind(this, (idx))} style={{ fontSize: 18 * s }}>{item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                                <Icon name="star" onPress={this.collect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                                <Text>{item.colNum}</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                                <Icon name="heart" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                                <Text>{item.likeNum}</Text>
                                            </View>
                                        </View>
                                        {
                                            this.state.username == item.name
                                                ? <TouchableOpacity style={{
                                                    width: 30 * s,
                                                    height: 30 * s,
                                                    borderRadius: 15 * s,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    // backgroundColor: '#37376F',
                                                    position: 'absolute',
                                                    top: 5,
                                                    right: 5
                                                }}
                                                    onPress={this.delete.bind(this, (idx))}
                                                >
                                                    <Text style={{ color: '#e8e8e8', fontSize: 30 * s }}>×</Text>
                                                </TouchableOpacity>
                                                : null
                                        }
                                    </View>
                                ))
                            }
                        </View>

                    </ScrollView>
                </DrawerLayoutAndroid>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 100 * s,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
                < TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}
                    onPress={() => Actions.addexp()
                    }
                >
                    <Text style={{ color: 'white', fontSize: 30 * s }}>+</Text>
                </TouchableOpacity >
            </SafeAreaView >
        )
    }
}
