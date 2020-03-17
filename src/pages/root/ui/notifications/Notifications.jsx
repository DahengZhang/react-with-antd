import React, { Component } from 'react';
import { Card, Button, Notification } from 'antd';
import './notifications.less';

export default class Notifications extends Component {
    handleOpenNotification = (type, placement = 'topRight') => {
        // 全局配置
        // Notification.config({
        //     placement
        // })
        Notification[type]({
            message: '发工资了',
            description: '上个月没上班，要啥工资',
            placement
        })
    }
    render () {
        return (
            <div className="page-container notifications-wrapper">
                <Card title="通知提醒框">
                    <Button className="right-gap" type="primary" onClick={ () => this.handleOpenNotification('success')}>success</Button>
                    <Button className="right-gap" type="primary" onClick={ () => this.handleOpenNotification('info')}>info</Button>
                    <Button className="right-gap" type="primary" onClick={ () => this.handleOpenNotification('warning')}>warning</Button>
                    <Button className="right-gap" type="primary" onClick={ () => this.handleOpenNotification('error')}>error</Button>
                </Card>
                <Card title="底部通知提醒框">
                    <Button className="right-gap" onClick={ () => this.handleOpenNotification('success', 'topLeft')}>success</Button>
                    <Button className="right-gap" type="dashed" onClick={ () => this.handleOpenNotification('info')}>info</Button>
                    <Button className="right-gap" type="primary" onClick={ () => this.handleOpenNotification('warning', 'bottomLeft')}>warning</Button>
                    <Button className="right-gap" type="danger" onClick={ () => this.handleOpenNotification('error', 'bottomRight')}>error</Button>
                </Card>
            </div>
        )
    }
}
