import React, { Component } from 'react';
import { Row, Col } from 'antd';
import moment from 'dayjs'
import JSONP from 'src/utils/ajax/Jsonp'
import './header.less';

export default class Header extends Component {
    state = {
        sysTime: moment().format('YYYY MM DD HH:mm:ss')
    }
    componentDidMount () {
        this.setState({
            userName: '张大亨'
        })
        this.timer = setInterval(() => {
            this.setState({
                sysTime: moment().format('YYYY MM DD HH:mm:ss')
            })
        }, 1000)
        this.getWeaterAPIData()
    }
    getWeaterAPIData () {
        JSONP.fetch({
            url: `https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=39480187e10139fde7bcbae98c5953f6&output=JSON&extensions=base`
        }).then(res => {
            this.setState({
                weather: `${res.weather} ${res.temperature}摄氏度 ${res.winddirection}风${res.windpower}级`
            })
        })
    }
    render () {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{ this.state.userName }</span>
                        {/* <a href="">退出</a> */}
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    };
    componentWillUnmount () {
        clearInterval(this.timer)
    }
};
