import React, { Component } from 'react';
import { Card, Spin, Alert } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import './loadings.less';

export default class Loadings extends Component {
    render () {
        return (
            <div className="page-container loadings-wrapper">
                <Card title="Spin 用法">
                    <Spin className="right-gap" size="small"></Spin>
                    <Spin className="right-gap"></Spin>
                    <Spin className="right-gap" size="large"></Spin>
                    <Spin className="right-gap" indicator={ <RedoOutlined style={{ fontSize: 28 }} spin /> }></Spin>
                </Card>
                <Card title="内容遮罩">
                    <Spin
                        indicator={ <RedoOutlined style={{ fontSize: 28 }} spin /> }>
                        <Alert
                            className="button-gap"
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="info" />
                    </Spin>
                    <Spin
                        tip="加载中...">
                        <Alert
                            className="button-gap"
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="info" />
                    </Spin>
                    <Spin
                        tip="加载中..."
                        indicator={ <RedoOutlined style={{ fontSize: 28 }} spin /> } >
                        <Alert
                            className="button-gap"
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="info" />
                    </Spin>
                    <Spin
                        spinning={false} >
                        <Alert
                            className="button-gap"
                            message="React"
                            description="欢迎来到React高级实战课程"
                            type="success" />
                    </Spin>
                </Card>
            </div>
        );
    }
}
