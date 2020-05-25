import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Fill extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/math1"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>填空题</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`1、曲线y=∫(0,x)tan t dt(0<=x<=π/4)的弧长s= _______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`2、微分方程y'+y=e^-x*cos x满足条件y(0)=0的解为y=______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`3、设L是柱面方程x^2+y^2=1与平面z=x+y的交线，从z轴正向往z轴负向看去为逆时针方向，则曲线积分∫L xz dx+x dy+y^2/2 dz=______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`4、微分方程2yy'-y^2-2=0满足条件y(0)=1的特解y=_______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`5、设随机变量X的概率密度为f(x)={(x/2, 0<x<2),(0, 其他) F(X)为X的分布函数，EX为X的数学期望，则P F(X)>E(X)-1=________`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`6、若函数z=z(x,y)由方程e^x+xyz+x+cosx=2确定，则dz|(0,1) =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`7、设二维随机变量(X,Y)服从正态分布N(1,0;1,1;0)，则P{XY-Y<0} =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`8、曲面z=x^2(1-sin y)+y^2(1-sin x)在点(1,0,1)处的切平面方程为 =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`9、设f(x)是周期为4的可导奇函数，且f'(x)=2(x-1)，x∈[0,2]，则f(7)= ______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`10、已知y1=e^(3x)-xe^(2x)，y2=e^x-xe^(2x)，y3=-xe^(2x)是某二阶常系数非齐次线性微分方程的3个解，该方程的通解y=________`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`11、设A(aij)是三阶非零矩阵，|A|为A的行列式，Aij为aij的代数余子式，若aij+Aij=0 (i,j=1,2,3)，则|A|=______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`12、若特征方程f''(x)+f'(x)-2f(x)=0及f'(x)+f(x)=2e^x，则f(x) =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`13、设Σ={(x,y,z)|x+y+z=1,x>=0,y>=0,z>=0}，则∫∫(Σ) y^2 ds =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`14、设X为三维单位向量，E为三阶单位矩阵，则矩阵E-XX^T的秩为 =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`15、设二维随机变量(X,Y)服从正态分布N(μ,μ,σ^2,σ^2;0)，则E(XY^2) =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`16、∫[0,2] x√(2x-x^2) dx =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`17、lim(x->0) ln cosx/x^2 =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`18、设函数与f(u)可导，z=f(sin y-sin x)+xy，则(1/cos x)·(θz/θx)+(1/cos y)·(θz/θy) =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`19、设{x=sint t;y=t·sin t + cos t (t为参数)，则d^2y/dx^2|t=π/4 =______`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`20、设随机变量Y服从参数为1的指数分布，a为常数且大于零，则P{Y<=a+1|Y>a} =______`}</p>



                </div>
                <Accordion defaultActiveKey="1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="参考答案" className="pad">
                        <p>1.【答案】1-π/4</p>
                        <p>【解析】S=∫(0,π/4) (y')^2 dx=∫(0,π/4) tan^2 x dx=∫(0,π/4) sec^2 x-1 dx=tan x-x|(0,π/4)=1-π/4</p>
                        <p>2.【答案】[C] </p>
                        <p>【解析】由z=f(x)lnf(y)Zx'=f'(x)lnf(y)，Zy'=f(x)/f(y)*f'(y)，Zxy''=f'(x)/f(y)f'(y)，Zxy''=f''(x)lnf(y)，Zxy''=f(x)*(f''(y)f(y)-(f'(y))^2)/f^2(y)，所以Zxy''|(x=0,y=0)=f'(0)/f(0)*f'(0)=0，Zxy''|(x=0,y=0)=f''(0)lnf(0)，要使得函数Z=f(x)lnf(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)ln f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0。</p>
                        <p>3.【答案】π</p>
                        <p>【解析】可设a=(1,0,L,0)^T，则aa^T的特征值为1,0,L,0，从而E-aa^T的特征值为0,1,L,1，因此π</p>
                        <p>4.【答案】√(3e^x-2)</p>
                        <p>【解析】所以Zxy''|(x=0,y=0)=f'(0)/f(0)=0，Zxy''|(x=0,y=0)=f''(0)ln f(0)，要使得函数Z=f(x)ln f(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0</p>
                        <p>5.【答案】2/3 </p>
                        <p>【解析】∵ x-tanx ~ -x^3/3若要x-tanx与x^b同阶无穷小，∴ k=3</p>
                        <p>6.【答案】2/3 </p>
                        <p>【解析】再由f'(x)+f(x)=2e^x得2C1·e^x-C2·e^(-2x)=2e^x，可知C1=1，C2=0。故f(x)=2/3</p>
                        <p>7.【答案】1/2 </p>
                        <p>【解析】解：P(A ￣B)=P(A)-P(AB)，P(B ￣A)=P(B)-P(AB),∵P(A)=p(B),∴P(A ￣B)=P(B ￣A)选C</p>
                        <p>8.【答案】2x-y-z=0</p>
                        <p>【解析】切平面方程为Zx(x-1)+Zy(y-0)+(-1)(z-1)=0 即2x-y-z=0</p>
                        <p>9.【答案】1 </p>
                        <p>【解析】f(x)=x^2-2x  x∈[0,2],∴f(1)=-1 从而f(7)=-f(1)=1</p>
                        <p>10.【答案】y=C1e^(3x)+C2e^x-xe^(2x) </p>
                        <p>【解析】y1-y2=e^(3x)-e^x是它所对应的齐次线性微分方程的解，可知对应的齐次线性微分方程的通解为y0=C1e^(3x)+C2e^x，</p>
                        <p>11.【答案】-1 </p>
                        <p>【解析】A^T=-A*,|A|=ai1Ai1+ai2Ai2+ai3Ai3=a1jA1j+a2jA2j+a3jA3j=-Σ(3,i=1)aij^2=-Σ(3,j=1)aij^2 0</p>
                        <p>12.【答案】e^x</p>
                        <p>【解析】再由f'(x)+f(x)=2e^x得2C1·e^x-C2·e^(-2x)=2e^x，可知C1=1，C2=0。故f(x)=e^x</p>
                        <p>13.【答案】√3/12 </p>
                        <p>【解析】故原式=√3∫[0,1] dy∫[0,1-y] y^2(1-y) dy = √3/12'</p>
                        <p>14.【答案】[D] </p>
                        <p>【解析】Ik=∫(e,k) e^(x^2) sinx dx看为以k为自变量的函数，则可知Ik'=e^(k^2)·sink>=0，k∈(0,π)，即可知Ik=∫(e,k) e^(x^2) sinx dx关于k在(0,π)上为单调递增函数，又由于1,2,3∈(0,π)，则I，故选D</p>
                        <p>15.【答案】2</p>
                        <p>【解析】矩阵XX^T的特征值为0,0,1，故E-XX^T的特征值为1,1,0。有由于为实对称矩阵，是可相似对角化的，故它的秩等于它非零特征值的个数，也即r(E-XX^T)=2</p>
                        <p>16.【答案】π/2</p>
                        <p>【解析】∫[-1,1] √(1-t^2) dt,π/2</p>
                        <p>17.【答案】-1/2 </p>
                        <p>【解析】lim(x->0) (-1/2*x^2)/x^2=-1/2</p>
                        <p>18.【答案】y/cos x + x/cos y </p>
                        <p>【解析】f'(sin y-sin x)(-cos x)·1/cos x + y·(1/cos x) + 1/cos y·[cos yf'(sin y-sin x)] + x/cos y,y/cos x + x/cos y</p>
                        <p>19.【答案】√2 </p>
                        <p>【解析】d^2y/dx^2 = 1·1/cos t = 1/cos t,∴d^2y/dx^2|t=π/4 = √2</p>
                        <p>20.【答案】1-1/e</p>
                        <p>【解析】[e^(-a)-e^-(a+1)]/e^(-a),1-1/e</p>
                    </Accordion.Panel>
                </Accordion>
            </div>
        )
    }
}
