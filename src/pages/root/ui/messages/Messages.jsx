import React, { Component } from 'react';
import { Card, Button, Message } from 'antd';
import './messages.less';

export default class Messages extends Component {
    handleOpenNotification = (type = 'success', time) => {
        const message = Message[type]('恭喜你，react课程晋级成功', time, () => {
            console.log('提示框关闭')
        })
        if (time === 0) {
            setTimeout(message, 3000)
        }
    }
    render () {
        return (
            <div className="page-container messages-wrapper">
                <Card title="全局提示框">
                    <Button type="primary" className="right-gap" onClick={ () => this.handleOpenNotification('success') }>success</Button>
                    <Button className="right-gap" onClick={ () => this.handleOpenNotification('info') }>info</Button>
                    <Button className="right-gap" onClick={ () => this.handleOpenNotification('warning') }>warning</Button>
                    <Button type="danger" className="right-gap" onClick={ () => this.handleOpenNotification('error') }>error</Button>
                    <Button type="primary" className="right-gap" onClick={ () => this.handleOpenNotification('loading', 0) }>Loading</Button>
                </Card>
            </div>
        )
    }
}
