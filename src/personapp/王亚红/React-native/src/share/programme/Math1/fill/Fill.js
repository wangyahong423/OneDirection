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
                        onPress={() => Actions.fill1()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`1、曲线y=∫(0,x)tan t dt(0<=x<=π/4)的弧长s= _______`}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill2()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`2、微分方程y'+y=e^-x*cos x满足条件y(0)=0的解为y=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill3()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`3、设L是柱面方程x^2+y^2=1与平面z=x+y的交线，从z轴正向往z轴负向看去为逆时针方向，则曲线积分∫L xz dx+x dy+y^2/2 dz=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill4()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`4、微分方程2yy'-y^2-2=0满足条件y(0)=1的特解y=_______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill5()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`5、设随机变量X的概率密度为f(x)={(x/2, 0<x<2),(0, 其他) F(X)为X的分布函数，EX为X的数学期望，则P F(X)>E(X)-1=________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill6()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`6、若函数z=z(x,y)由方程e^x+xyz+x+cosx=2确定，则dz|(0,1) =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill7()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`7、设二维随机变量(X,Y)服从正态分布N(1,0;1,1;0)，则P{XY-Y<0} =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill8()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`8、曲面z=x^2(1-sin y)+y^2(1-sin x)在点(1,0,1)处的切平面方程为 =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill9()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`9、设f(x)是周期为4的可导奇函数，且f'(x)=2(x-1)，x∈[0,2]，则f(7)= ______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill10()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`10、已知y1=e^(3x)-xe^(2x)，y2=e^x-xe^(2x)，y3=-xe^(2x)是某二阶常系数非齐次线性微分方程的3个解，该方程的通解y=________`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill11()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`11、设A(aij)是三阶非零矩阵，|A|为A的行列式，Aij为aij的代数余子式，若aij+Aij=0 (i,j=1,2,3)，则|A|=______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill12()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`12、若特征方程f''(x)+f'(x)-2f(x)=0及f'(x)+f(x)=2e^x，则f(x) =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill13()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`13、设Σ={(x,y,z)|x+y+z=1,x>=0,y>=0,z>=0}，则∫∫(Σ) y^2 ds =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill14()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`14、设X为三维单位向量，E为三阶单位矩阵，则矩阵E-XX^T的秩为 =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill15()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`15、设二维随机变量(X,Y)服从正态分布N(μ,μ,σ^2,σ^2;0)，则E(XY^2) =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill16()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`16、∫[0,2] x√(2x-x^2) dx =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill17()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`17、lim(x->0) ln cosx/x^2 =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill18()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`18、设函数与f(u)可导，z=f(sin y-sin x)+xy，则(1/cos x)·(θz/θx)+(1/cos y)·(θz/θy) =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill19()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`19、设{x=sint t;y=t·sin t + cos t (t为参数)，则d^2y/dx^2|t=π/4 =______`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.fill20()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`20、设随机变量Y服从参数为1的指数分布，a为常数且大于零，则P{Y<=a+1|Y>a} =______`}</Text>
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