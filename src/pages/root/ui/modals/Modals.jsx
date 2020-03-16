import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './modals.less';

export default class Modals extends Component {
    state = {
        nowModal: ''
    }
    handleOpenModal = type => {
        this.setState({
            nowModal: type
        })
    }
    handleConfirmModal = type => {
        Modal[type]({
            title: 'React',
            content: '你确定学会react了吗？',
            onOk () {
                console.log('是的')
            },
            onCancel () {
                console.log('没有')
            }
        })
    }
    render() {
        return (
            <div className="page-container modals-wrapper">
                <Card title="基础模态框">
                    <Button type="primary" onClick={ () => this.handleOpenModal('default') } className="button">open</Button>
                    <Button type="primary" onClick={ () => this.handleOpenModal('customFooter') } className="button">自定义页脚</Button>
                    <Button type="primary" onClick={ () => this.handleOpenModal('top20') } className="button">顶部20px弹框</Button>
                    <Button type="primary" onClick={ () => this.handleOpenModal('middle') } className="button">水平垂直剧中</Button>
                </Card>
                <Card title="信息确认框">
                    <Button type="primary" onClick={ () => this.handleConfirmModal('confirm') } className="button">confirm</Button>
                    <Button type="primary" onClick={ () => this.handleConfirmModal('info') } className="button">info</Button>
                    <Button type="primary" onClick={ () => this.handleConfirmModal('success') } className="button">success</Button>
                    <Button type="primary" onClick={ () => this.handleConfirmModal('warning') } className="button">warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.nowModal === 'default'}
                    onCancel={() => {
                        this.setState({
                            nowModal: ''
                        })
                    }} >
                    <p>欢迎学习慕课新推出大React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.nowModal === 'customFooter'}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            nowModal: ''
                        })
                    }} >
                    <p>自定义页脚</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top: 20}}
                    visible={this.state.nowModal === 'top20'}
                    onCancel={() => {
                        this.setState({
                            nowModal: ''
                        })
                    }} >
                    <p>距离顶部20px</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="modals-wrapper vertical-center-modal"
                    visible={this.state.nowModal === 'middle'}
                    onCancel={() => {
                        this.setState({
                            nowModal: ''
                        })
                    }} >
                    <p>水平垂直居中</p>
                </Modal>
            </div>
        )
    }
}
