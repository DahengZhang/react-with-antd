import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from 'src/components/nav-left/NavLeft';
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer/Footer';
import Home from 'src/pages/root/home/Home';
import 'src/assets/common.less';

export default class App extends Component {
    render() {
        return (
            <>
                <Row className="container">
                    <Col span="4" className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span="20" className="main">
                        <Header />
                        <Row className="content">
                            <Home />
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </>
        );
    };
};
