import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;


export default class Choose extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.outbox, { marginTop: '10%' }]}
                        onPress={() => Actions.choose21()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`1、下列曲线有渐近线的是(  )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose22()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)具有二阶导数，g(x)=f(0)(1-x)+f(1)x,则在[0,1]上 (  )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose23()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`3、微分方程y''-4y'+89=e^2x*(1+cos2x)的特解可设为y^*=(  )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose24()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`4、f(x)是连续函数，F(x)的原函数，则(  )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose25()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`5、设f(x)={1-cosx,x>0;x,;x^2*g(x),x<=0},其中g(x)是有界函数，则f(x)在x=0处（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose26()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`6、设数列Xn与Yn满足lim(n->正无穷)XnYn=0,则下列断言正确的是（   ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose27()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`7、函数f(x)=(x^2-x-2)|x^3-x|的不可导点的个数是(   )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose28()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`8、设A是任一n(n>=3)阶方阵，A*是其伴随矩阵，又k为常数，且k！=0，±1，则必有(kA)*=（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose29()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`9、设在区间[a,b]上f(x)>0,f'(x)<0,f''(x)>0,记S1=f(x)dx1S2=f(b)(b-a),S2=1/2[f(a)+f(b)](b-a),则（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose210()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`10、已知函数y=f(x)对一切x满足xf''(x)+3x[f'(x)]^2=1-e^(-x),若f'(x0)=0(x0!=0)，则（   ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose211()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`11、设当x->0时，e^x-(ax^3+bx+1)是比x^2高阶的无穷小，则（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose212()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`12、设函数f(x)在区间(-x,x)时，恒有|f(x)|<=X^2,则x=0必是f(x)的（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose213()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`13、设f(x)处处可导，则（   ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose214()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`14、设函数f(x)具有二阶连续导数，且f(x)>0，f(0)'=0,则函数z=f(x)lnf(y)在点(0,0)处取得极小值的一个充分条件是()`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose215()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`15、设f(x)在(-∞，+∞)内可导，且对任意x1,x2,当x1>x2时，都有f(x1)>f(x2),则（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose216()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`16、设a为n维单位列向量，E为n阶单位矩阵，则(  )`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose217()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`17、设函数f(x)在[0,1]上f''(x)>0,则f'(1),f'(0),f(1)-f(0)或f(0)-f(1)的大小顺序是（   ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose218()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`18、设f(x)可导，F(x)=f(x)(1+|sinx|),若使F(x)在x=0处可导，则必有（   ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose219()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`19、当x->0时，x-sinx是x^2的（  ）`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose220()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`20、若f(x)的导函数是sinx,则f(x)有一个原函数为（ ）`}</Text>
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