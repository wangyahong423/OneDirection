import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Fill extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.outbox, { marginTop: '10%' }]}
                        onPress={() => Actions.fill21()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`1、设函数f(x,y)具有一阶连续的偏导数，且已知df(x,y)=ye^ydx+x(1+y)e^ydy,f(0,0)=0,则f(x,y)=_______`}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill22()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`2、设y=y(x)是由方程x^2-y+1=e^y所确定的隐函数，则(d^2y)/dx^2|x=0 =________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill23()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`3、设f(x)为周期为4的可导奇函数，且f'(x)=2(x-1),x属于[0,2],则f(7)=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill24()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`4、微分方程y''-4y=e^2x的通解为________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill25()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`5、已知f(x)={(cosx)^x^-2,x!=0;a,x=0}在x=0处连续，则a=_________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill26()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`6、已知向量组α1=9(1,2,-1,1),α2=(2,0,t,0),α3=(0,-4,5,-2)的秩为2，则t=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill27()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`7、曲线y=∫(0,x)tan t dt(0<=x<=π/4)的弧长s= _______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill28()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`8、由曲线y=x+1/x,x=2及y=2所围图形的面积S=________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill29()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`9、微分方程y''+2y'+5y=0的通解为________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill210()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`10、设y=(x+e^(-x/2))^2/3,则y'|x=0=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill211()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`11、设L是柱面方程x^2+y^2=1与平面z=x+y的交线，从z轴正向往z轴负向看去为逆时针方向，则曲线积分∫L xz dx+x dy+y^2/2 dz=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill212()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`12、函数y=x+2cosx在区间[0,π/2]上的最大值为______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill213()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`13、设y=ln(1+3^(-x)),则dy=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill214()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`14、微分方程y'y(1-x)/x的通解是________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity><TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill215()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`15、若f''(x)不变号，且曲线y=f(x)在点(1,1)上的曲率圆为x^2+y^2=2,则函数f(x)在区间(1,2)内________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill216()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`16、曲线y=∫(0,x)tan t dt(0<=x<=π/4)的弧长s= _______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity><TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill217()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`17、微分方程y'+y=e^-x*cos x满足条件y(0)=0的解为y=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill218()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`18、设L是柱面方程x^2+y^2=1与平面z=x+y的交线，从z轴正向往z轴负向看去为逆时针方向，则曲线积分∫L xz dx+x dy+y^2/2 dz=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill219()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                <Text style={{ fontSize: 16 * s }}>{`19、设f(x)为周期为4的可导函数，且f'(x)=2(x-1),x∈[0,2],则f(7)=_____`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill220()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                <Text style={{ fontSize: 16 * s }}>{`20、曲线y=x(1+arcsin2/x)的斜渐近线为______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    outbox: {
        marginBottom: '5%',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    inbox: {
        width: '80%',
        height: 120 * s,
        borderWidth: 2,
        borderRadius: 10 * s
    }
})