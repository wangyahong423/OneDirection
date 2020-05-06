import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '(1)令1/n=x，则原不等式可化为x/(x+1)<ln(1+x)<x，x>0。',
                content3: '先证明ln(1+x)<x，x>0:',
                content4: "令f(x)=x-ln(1+x)。由于f'(x)=1-1/(10+x) > 0，x>0，可知f(x)在[0,+∞)上单调递增。又由于f(0)=0，因此当x>0时，f(x)>f(0)=0。也即ln(1+x)<x，x>0。",
                content5: "在证明x/(x+1)<ln(1+x)，x>0:",
                content6:"令g(x)=ln(1+x)。由于g(x)=1/(1+x)-1/(1+x)^2>0，x>0，可知g(x)在[0,+∞)上单调递增。由于g(0)=0，因此当x>0时，g(x)>g(0)=0。也即x/(x+1)<ln(1+x)，x>0。",
                content7:"因此，我们证明了x/x+1<ln(1+x)<x，x>0。再令由于，即可得到所需证明的不等式。",
                content8:"(2)a(n+1)-an=1/(n+1)-ln(1+1/n)，由不等式1/(n+1)<ln(1+1/n)可知：数列{an}单调递减。又由不等式ln(1+1/n)<1/n可知：",
                content9:"an=1 + 1/2+...+1/n-lnn>ln(1+1）+ln(1+1/2)+...+ln(1+1/n)-ln n=ln(n+1)-ln n>0。",
                content10:'因此数列{an}是有界的。故由单调有界收敛定理可知：数列{an}收敛。'
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={[{ marginTop: 5 * s}, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%', borderColor: '#37376F', borderWidth: 1, padding: '2%' }}>
                    <Text style={{ fontSize: 16 * s }}>{`证明：(1)对任意正整数n，都有1/(n+1) < ln (1+1/n) < 1/n`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(2)设an=1+1/2+...+1/n-ln n(n=1,2,...)，证明数列{an}收敛`}</Text>
                    </View>
                </View>
                <Accordion
                    sections={this.state.todo}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: '#37376F',
        borderBottomWidth: 1 * s,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft: '40%'
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
