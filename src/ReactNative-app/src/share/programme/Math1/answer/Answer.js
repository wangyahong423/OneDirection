import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.outbox, { marginTop: '10%' }]}
                    onPress={() => Actions.answer1()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`1、已知函数y(x)由方程x^3 + y^3 - 3x + 3y -2=0确定，求y(x)的极值`}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer2()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)在区间[0,1]上具有2阶导数，且f(1)>0，lim(x->0) f(x)/x <0，证明：`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(I)方程f(x)=0在区间(0,1)内至少存在一个实根；`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(II)方程f(x)f''(x) + [f'(x)]^2 = 0在区间(0,1)内至少存在两个不同实根。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer3()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`3、证明：(1)对任意正整数n，都有1/(n+1) < ln (1+1/n) < 1/n`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`设an=1+1/2+...+1/n-ln n(n=1,2,...)，证明数列{an}收敛`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer4()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`4、设函数y(x)是微分方程y'+xy=e^(-x^2/2)满足条件y(0)=0的特解。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)求y(x)；(2)求曲线y=y(x)的凸凹区间拐点。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer5()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`5、求不定积分∫e^(2x)·arctan√(e^x-1) dx`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer6()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`6、已知微分方程y'+y=f(x)，其中f(x)是R上的连续函数。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)若f(x)=x，求方程的通解；(2)若f(x)是周期为T的函数，证明：方程存在唯一以T为周期的解。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer7()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`7、设函数f(u,v)具有2阶连续偏导数，y=f(e^x,cos x)，求(dy/dx)|x=0，(d^2y/dx^2)|x=0`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer8()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`8、设3矩阵A=(α1,α2,α3)有3个不同的特征值，α3=α1+2α2`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)证明：r(A)=2`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)若β=α1+α2+α3，求方程组Ax=β的解`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer9()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`9、设函数y(x)满足方程y''+2y'+ky=0，其中0<k<1`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)证明：反常积分∫[0,+∞] y(x) dx收敛`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)若y(0)=1，y'(0)=1，求∫[0,+∞] y(x) dx的值`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer10()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`10、设函数f(X)=x+a·ln (1+x)+bx·sin x，g(x)=k·x^3，若f(x)与g(x)在x->0是等阶无穷小，求a，b，k值。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer11()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`11、设函数f(x)在定义域I上的导数大于零，若对任意的x0∈I，曲线y=f(x)在点(x0,f(x0))处的切线与直线x=x0及x轴所围成的区域的面积为4，且f(0)=2，求f(x)的表达式。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer12()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`12、已知曲线L的方程为{z=√(2-x^2-y^2);z=x ，起点为A(0,√2,0)，终点为B(0,-√2,0)，计算曲线积分I=∫L(y+z) dx+(z^2-x^2+y) dy + (x^2+y^2) dz`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer13()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`13、设总体X的概率密度为f(x;θ)={1/(1-θ) θ<=x<=1;0 其他，其中θ为未参数，X1，X2......Xn为来自该总体的简单随机样本。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)求θ的矩估计。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)求θ的最大似然估计`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer14()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`14、设奇函数f(x)在[-1,1]上具有2阶导数，且f(1)=1，证明：`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)存在ξ∈(0,1)，使得f'(ξ)=1`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)存在η∈(-1,1)，使得f''(η)+f'(η)=1`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer15()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`15、设A=(1 a,1 0)，B=(0 1,1 b)，当b为何值时，存在矩阵C使得AC-CA=B，并求所有矩阵C。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer16()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`16、设随机变量概率密度为f(x)={1/4·x^2 0<x<3;0 其他，令随机变量Y={2 x<=1;x 1<x<2;1 x>=2`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)、求Y的分布函数`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)、求概率P{X<=Y}`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer17()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`17、证明：x·ln (1+x)/(1-x)+cos x >= 1+x^2/2，-1<x<1`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer18()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`18、已知曲线L:{x=f(t);y=cos t  (0<=t<π/2)，其中函数f(t)具有连续导数，且f(0)=0，f(t)>0 (0<t<π/2)，若曲线L的切线与x轴的交点到切点的距离恒为1，求函数f(t)的表达式，并求此曲线L与x轴与y轴无边界的区域的面积。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer19()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`19、设z=f(xy,yg(x))，其中函数f具有二阶连续偏导数，函数g(x)可导，且在x=1处取得极值g(1)=1，求Θ^2z/(Θx·Θy)|x=1,y=1`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer20()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`20、A为三阶实矩阵，R(A)=2，且A(1 1,0 0,-1 1)=(-1 1,0 0,1 1)`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)求A的特征值与特征向量 (2)求A`}</Text>
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