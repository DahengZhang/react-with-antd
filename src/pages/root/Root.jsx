import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from 'src/components/nav-left/NavLeft';
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer/Footer';
import 'src/assets/common.less';
import './root.less'

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
                            { this.props.children }
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </>
        );
    };
};
