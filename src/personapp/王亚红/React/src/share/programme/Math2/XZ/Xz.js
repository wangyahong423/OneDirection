import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Xz extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/math2"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>选择题</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;1、曲线y=(x-1)(x-2)^2(x-3)^3(x-4)^4的拐点是()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;2、设函数f(x)具有二阶连续导数，且f(x)>0，f(0)'=0,则函数z=f(x)lnf(y)在点(0,0)处取得极小值的一个充分条件是()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) f(0)>1,f''(0)>0&emsp;&emsp;(B) f(0)>1,f''(0)&emsp;&emsp;(C) f(0),f''(0)>0&emsp;&emsp;(D)f(0),f''(0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;3、设a为n维单位列向量，E为n阶单位矩阵，则()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) E-aa^T不可逆&emsp;&emsp;(B) E+aa^T不可逆&emsp;&emsp;(C) E+2aa^T不可逆&emsp;&emsp;(D) E-2aa^T不可逆</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;4、设函数f(x)具有二阶函数连续导数，且f(x)>0，f(0)'=0，则函数Z=f(x)ln f(y)在点(0,0)处取得极小值的一个充分条件是（）</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) f(0)>1,f''(0)>0&emsp;&emsp;(B) f(0)>1,f''(0)&emsp;&emsp;(C) f(0),f''(0)>0&emsp;&emsp;(D) f(0),f''(0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;5、当x——>0，若x=tanx与X^k是同阶无穷小，则k=()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) 1 &emsp;&emsp;(B) 2 &emsp;&emsp;(C) 3 &emsp;&emsp;(D) 4</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;6、设A是3阶实对称矩阵，E是3阶单位矩阵，若A^2 + A = 2E，且|A|=4，则二次型x^T·Ax的规范形为()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) y1^2+y2^2+y^3 &emsp;&emsp;(B) y1^2+y2^2-y^3 &emsp;&emsp;(C) y1^2-y2^2-y^3  &emsp;&emsp;(D) -y1^2-y2^2-y^3</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;7、设A，B为随机事件，则P(A)=P(B)的充分必要条件是()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) P(A∪B)=P(A)+P(B) &emsp;&emsp;(B) P(AB)=P(A)P(B) &emsp;&emsp;(C) P(A ￣B)=P(B ￣A) &emsp;&emsp;(D) P(AB)=P(￣A ￣B)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;8、设随机变量X与Y相互独立，且都要从正态分布N(μ,σ^2)，则P|X-Y|小于1()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) 与μ无关，而与σ^2有关&emsp;&emsp;(B) 与μ有关，而与σ^2无关 &emsp;&emsp;(C) 与μ，σ^2都有关 &emsp;&emsp;(D) 与μ，σ^2都无关</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;9、设函数f(x)可导，且f(x)f'(x)>0，则()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) f(1)>f(-1) &emsp;&emsp;(B) f(1) f(-1) &emsp;&emsp;(C) |f(1)|>|f(-1)| &emsp;&emsp;|f(1)| |f(-1)|</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;10、已知矩阵A=0 2 1，B=0 2 0，C=0 2 0，则</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) A与C相似，B与C相似&emsp;&emsp; (B) A与C相似，B与C不相似&emsp;&emsp;(C) A与C不相似，B与C相似 &emsp;&emsp;(D) A与C不相似，B与C不相似</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;11、若y=(1+x^2)^2-√(1+x^2)，y=(1+x^2)^2+√(1+x^2) 是微分方程y'+P(x)y=q(x)的两个解，则q(x)=()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) 3x(1+x^2) &emsp;&emsp;(B) -3x(1+x^2) &emsp;&emsp;(C) x/(1+x^2) &emsp;&emsp;(D) -x/(1+x^2)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;12、设A^T与B^T是可逆矩阵，且A与B相似，则下列结论错误的是()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) A^T与B^T相似&emsp;&emsp;(B) A^-1与B^-1相似 &emsp;&emsp;(C) A+A^T与B+B^T相似 &emsp;&emsp;(D) A+A^-1与B+B^-1相似</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;13、设y=1/2·e^(2x)+(x-1/3)e^x是二阶常系数非齐次线性微分方程y''+ay'+by=ce^x的一个特解，则()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) a=-3,b=-1,c=-1&emsp;&emsp;(B) a=3,b=2,c=-1 &emsp;&emsp; (C) a=-3,b=2,c=1&emsp;&emsp;(D) a=3,b=2,c=1</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;14、设Ik=∫(e,k) e^(x^2) sinx dx(k=1,2,3)，则有()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) I3I2I1 &emsp;&emsp;(B) I2I1I3 &emsp;&emsp;(C) I1I3I2 &emsp;&emsp;(D) I1I2I3</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;15、设随机变量x与y相互独立，且分别服从参数为1与参数为4的指数分布，则P=()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) 1/5 &emsp;&emsp;(B) 1/3 &emsp;&emsp;(C) 2/5 &emsp;&emsp;(D) 4/5</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;16、矩阵，将A的第2列加到第1列得矩阵B，再交换B的第2行与第3行得单位矩阵，记P1=(1 0 1, 1 1 0, 0 0 1)，P2=(1 0 0, 0 0 1, 0 1 0)，则A=()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;17、设A=(a1,a2,a3,a4)是4阶矩阵，A*为A的伴随矩阵，若(1,0,1,0)^T是方程组Ax=0的一个基础解系，则A*x=0的基础解系可为()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;18、设F1(x)，F2(x)为两个分布函数，其对应密度f1(x)，f2(x)是连续函数，则必为概率密度的是()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;19、设数列an单调减少，lim(n->∞)an=0，Sn=Σ(n,k=1) ak(n=1,2,……)无界，则幂级函数Σ(n,k=1) an(x-1)^n的收敛域为()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp; (A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;20、若A，B为任意两个随机事件，则()</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;(A) (1,0)&emsp;&emsp;(B) (2,0)&emsp;&emsp;(C) (3,0)&emsp;&emsp;(D) (4,0)</p>

                    
                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>1.【答案】[C] </p>
                        <p>【解析】由y=(x-1)(x-2)^2(x-3)^3(x-4)^4可知，1,2,3,4分别是y=(x-1)(x-2)^2(x-3)^3(x-4)^4=0的一、二、三、四重根，故由导数与原函数之间的关系可知y'(1)=/0，y'(2)=y'(3)=y'(4)=0，y''(2)=/0，y''(3)=y''(4)=0，y'''(3)=/0，y'''(4)=0，故(3,0)是一拐点。</p>
                        <p>2.【答案】[C] </p>
                        <p>【解析】由z=f(x)lnf(y)Zx'=f'(x)lnf(y)，Zy'=f(x)/f(y)*f'(y)，Zxy''=f'(x)/f(y)f'(y)，Zxy''=f''(x)lnf(y)，Zxy''=f(x)*(f''(y)f(y)-(f'(y))^2)/f^2(y)，所以Zxy''|(x=0,y=0)=f'(0)/f(0)*f'(0)=0，Zxy''|(x=0,y=0)=f''(0)lnf(0)，要使得函数Z=f(x)lnf(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)ln f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0。</p>
                        <p>3.【答案】[A] </p>
                        <p>【解析】可设a=(1,0,L,0)^T，则aa^T的特征值为1,0,L,0，从而E-aa^T的特征值为0,1,L,1，因此E-aa^T不可逆。</p>
                        <p>4.【答案】[C] </p>
                        <p>【解析】所以Zxy''|(x=0,y=0)=f'(0)/f(0)=0，Zxy''|(x=0,y=0)=f''(0)ln f(0)，要使得函数Z=f(x)ln f(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0</p>
                        <p>5.【答案】[C] </p>
                        <p>【解析】∵ x-tanx ~ -x^3/3若要x-tanx与x^b同阶无穷小，∴ k=3</p>
                        <p>6.【答案】[C] 规范形为y1^2-y2^2-y3^2，选C</p>
                        <p>【解析】</p>
                        <p>7.【答案】[C] </p>
                        <p>【解析】解：P(A ￣B)=P(A)-P(AB)，P(B ￣A)=P(B)-P(AB),∵P(A)=p(B),∴P(A ￣B)=P(B ￣A)选C</p>
                        <p>8.【答案】[A] </p>
                        <p>【解析】解：因为X~N(μ,σ^2) Y~N(μ,σ^2) X与Y相互独立,∴X-Y~N(0,2σ^2)</p>
                        <p>9.【答案】[C] </p>
                        <p>【解析】令F(x)=f^2(x)，则有F'(x)=2f(x)f'(x)，故F(x)单调递增，则F(1)=F(-1)，即[f(1)]^2>[f(-1)]^2，即|f(1)|>|f(-1)|，故选择C</p>
                        <p>10.【答案】[B] </p>
                        <p>【解析】A和B的特征值为2,2,1，但是A有三个线性无关的特征向量，而B只有两个，所以依A对角化，B不可，因此选择B。</p>
                        <p>11.【答案】[A] </p>
                        <p>【解析】因此可得q(x)=4x(1+x^2)+(-x/1+x^2)(1+x^2)^2=4x(1+x^2)-x(1+x^2)=3x(1+x^2)，故选择A</p>
                        <p>12.【答案】[C] </p>
                        <p>【解析】而C选项中，P^-1A^T不一定等于B^T，故C不正确，选择C</p>
                        <p>13.【答案】[A] </p>
                        <p>【解析】从而a=-(1+2)=-3，b=1*2=2，再将特解y=xe^x代入方程y''-3y'+2y=ce^x得：c=-1</p>
                        <p>14.【答案】[D] </p>
                        <p>【解析】Ik=∫(e,k) e^(x^2) sinx dx看为以k为自变量的函数，则可知Ik'=e^(k^2)·sink>=0，k∈(0,π)，即可知Ik=∫(e,k) e^(x^2) sinx dx关于k在(0,π)上为单调递增函数，又由于1,2,3∈(0,π)，则I，故选D</p>
                        <p>15.【答案】[A] </p>
                        <p>【解析】e^(-5y)dy=1/5</p>
                        <p>16.【答案】[D] </p>
                        <p>【解析】显然P2AP1=E，A=P2^(-1)P1^(-1)，因为P2^(-1)=P2，所以A=P2P1^(-1)，选D。</p>
                        <p>17.【答案】[D] </p>
                        <p>【解析】因为AX=0基础解系含一个线性无关的解向量，所以r(A)=3，于是r(A*)=1，故A*X=0基础解系含3个线性无关的解向量，又A*A=|A|E=0 且 r(A)=3，所以A的列向量组中含A*X=0的基础解系，因为(1,0,1,0)^T是方程AX=0的基础解系，所以α1+α3=0，故α1，α2，α4或α2，α3，α4线性无关，显然α1，α2，α3为A*X=0的一个基础解系，选D。</p>
                        <p>18.【答案】[D] </p>
                        <p>【解析】∫(-∞,+∞) [f1(x)F2(x)+f2(x)F1(x)] dx = F1(x)F2(x)|(-∞,+∞) = 1，故选D</p>
                        <p>19.【答案】[C] </p>
                        <p>【解析】因为数列an单调减少且lim(x->∞)an=0，所以an>0(n=1,2,Λ)。由交错级数的莱布尼兹审敛法，Σ(∞,n=1)(-1)^n an收敛，因为Sn=Σ(n,k=1)ak无界，所以级数Σ(∞,n=1)an发散，故选C。</p>
                        <p>20.【答案】[C] </p>
                        <p>【解析】P(A)>=P(AB)，P(B)>=P(AB)，所以P(AB)P(A)+P(B)]/2，故选择C。</p>
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
