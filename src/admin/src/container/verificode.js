import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './verificode.css';
class Verificode extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
            ...this.initState(),
            refresh: false
        }

        this.GetRefresh = this.GetRefresh.bind(this);
    }

    componentDidMount() {
        this.refreshCanvas();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.props = nextProps;
            this.refreshCanvas();
        }
    }

    GetRefresh() {
        if (this.props.onGetRefresh) {
            this.props.onGetRefresh();
        }

    }

    refreshCanvas() {

        const canvas = this.canvas.current;
        const { data } = this.props;
        const { rotate, color } = this.state;
        if (canvas.getContext) {
            let ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < 4; i++) {
                ctx.font = '80px Calibri'; //随机生成字体大小
                ctx.fillStyle = `rgb(${color[i].toString()})`; //随机生成字体颜色        
                let x = canvas.width / (5) * (i + 1);
                let y = canvas.height / 2;
                let deg = rotate[i];
                /**设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(data[i], 0, 0);

                /**恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /**绘制干扰线**/
            for (let i = 0; i < 4; i++) {
                ctx.strokeStyle = this.getRandom(100, 255, 3);
                ctx.beginPath();
                ctx.moveTo(this.getRandom(0, canvas.width), this.getRandom(0, canvas.height));
                ctx.lineTo(this.getRandom(0, canvas.width), this.getRandom(0, canvas.height));
                ctx.stroke();
            }
            /**绘制干扰点**/
            for (let i = 0; i < canvas.width / 4; i++) {
                ctx.fillStyle = this.getRandom(0, 255);
                ctx.beginPath();
                ctx.arc(this.getRandom(0, canvas.width), this.getRandom(0, canvas.height), 1, 0, 2 * Math.PI);
                ctx.fill();
            }

        }

    }


    initState() {
        return {
            rotate: this.getRandom(15, -15, 4),
            color: [this.getRandom(0, 255, 3), this.getRandom(0, 255, 3), this.getRandom(0, 255, 3), this.getRandom(0, 255, 3)],
        }
    }

    getRandom(max, min, num) {
        const asciiNum = ~~(Math.random() * (max - min + 1) + min)
        if (!Boolean(num)) {
            return asciiNum
        }
        const arr = []
        for (let i = 0; i < num; i++) {
            arr.push(this.getRandom(max, min))
        }
        return arr
    }



    render() {
        const { ownStyle } = this.props;
        return (
            <div className='vcodewrap' style={ownStyle}>
                <canvas id="bgi" ref={this.canvas} onMouseEnter={() => this.setState({ refresh: true })}></canvas>

                {
                    this.state.refresh
                        ? <div
                            className='mask'
                            onClick={() => {
                                this.setState({ ...this.initState(), refresh: false })
                                this.GetRefresh()
                            }}
                            onMouseLeave={() => { this.setState({ refresh: false }) }}
                        > 看不清？换一个
            </div>
                        : null}
            </div>
        )
    }

}

Verificode.propsTypes = {
    ownStyle: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        margin: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.array.isRequired,
    onGetRefresh: PropTypes.func.isRequired
}
export default Verificode;