import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Answer extends Component {
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
                    <span>解答题</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`1、已知函数y(x)由方程x^3 + y^3 - 3x + 3y -2=0确定，求y(x)的极值`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`2、设函数f(x)在区间[0,1]上具有2阶导数，且f(1)>0，lim(x->0) f(x)/x <0，证明：(I)方程f(x)=0在区间(0,1)内至少存在一个实根；(II)方程f(x)f''(x) + [f'(x)]^2 = 0在区间(0,1)内至少存在两个不同实根。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`3、证明：(1)对任意正整数n，都有1/(n+1) < ln (1+1/n) < 1/n,设an=1+1/2+...+1/n-ln n(n=1,2,...)，证明数列{an}收敛`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`4、设函数y(x)是微分方程y'+xy=e^(-x^2/2)满足条件y(0)=0的特解。(1)求y(x)；(2)求曲线y=y(x)的凸凹区间拐点。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`5、求不定积分∫e^(2x)·arctan√(e^x-1) dx`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`6、已知微分方程y'+y=f(x)，其中f(x)是R上的连续函数。(1)若f(x)=x，求方程的通解；(2)若f(x)是周期为T的函数，证明：方程存在唯一以T为周期的解。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`7、设函数f(u,v)具有2阶连续偏导数，y=f(e^x,cos x)，求(dy/dx)|x=0，(d^2y/dx^2)|x=0`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`8、设3矩阵A=(α1,α2,α3)有3个不同的特征值，α3=α1+2α2.(1)证明：r(A)=2(2)若β=α1+α2+α3，求方程组Ax=β的解`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`9、设函数y(x)满足方程y''+2y'+ky=0，其中0<k<1(1)证明：反常积分∫[0,+∞] y(x) dx收敛(2)若y(0)=1，y'(0)=1，求∫[0,+∞] y(x) dx的值`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`10、10、设函数f(X)=x+a·ln (1+x)+bx·sin x，g(x)=k·x^3，若f(x)与g(x)在x->0是等阶无穷小，求a，b，k值。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`11、设函数f(x)在定义域I上的导数大于零，若对任意的x0∈I，曲线y=f(x)在点(x0,f(x0))处的切线与直线x=x0及x轴所围成的区域的面积为4，且f(0)=2，求f(x)的表达式。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`12、12、已知曲线L的方程为{z=√(2-x^2-y^2);z=x ，起点为A(0,√2,0)，终点为B(0,-√2,0)，计算曲线积分I=∫L(y+z) dx+(z^2-x^2+y) dy + (x^2+y^2) dz`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`13、设总体X的概率密度为f(x;θ)={1/(1-θ) θ<=x<=1;0 其他，其中θ为未参数，X1，X2......Xn为来自该总体的简单随机样本。(1)求θ的矩估计。(2)求θ的最大似然估计`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`14、设奇函数f(x)在[-1,1]上具有2阶导数，且f(1)=1，证明：(1)存在ξ∈(0,1)，使得f'(ξ)=1(2)存在η∈(-1,1)，使得f''(η)+f'(η)=1`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`15、15、设A=(1 a,1 0)，B=(0 1,1 b)，当b为何值时，存在矩阵C使得AC-CA=B，并求所有矩阵C。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`16、设随机变量概率密度为f(x)={1/4·x^2 0<x<3;0 其他，令随机变量Y={2 x<=1;x 1<x<2;1 x>=2;(1)、求Y的分布函数(2)、求概率P{X<=Y}`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`17、证明：x·ln (1+x)/(1-x)+cos x >= 1+x^2/2，-1<x<1`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`18、已知曲线L:{x=f(t);y=cos t  (0<=t<π/2)，其中函数f(t)具有连续导数，且f(0)=0，f(t)>0 (0<t<π/2)，若曲线L的切线与x轴的交点到切点的距离恒为1，求函数f(t)的表达式，并求此曲线L与x轴与y轴无边界的区域的面积。`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`19、设z=f(xy,yg(x))，其中函数f具有二阶连续偏导数，函数g(x)可导，且在x=1处取得极值g(1)=1，求Θ^2z/(Θx·Θy)|x=1,y=1`}</p>

                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;{`20、A为三阶实矩阵，R(A)=2，且A(1 1,0 0,-1 1)=(-1 1,0 0,1 1);(1)求A的特征值与特征向量 (2)求A`}</p>



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
