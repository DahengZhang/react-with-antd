import React, { Component } from 'react';
import { Card, Tabs as Tab } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './tabs.less';

export default class Tabs extends Component {
    state = {
        panes: []
    }
    componentDidMount () {
        const panes = [
            {
                key: 1
            },
            {
                key: 2
            },
            {
                key: 3
            }
        ]
        this.setState({
            panes
        })
    }
    addTab = option => {
        this.setState({
            panes: [ ...this.state.panes, option ]
        })
    }
    removeTab = key => {
        this.setState({
            panes: this.state.panes.filter(item => item.key !== key)
        })
    }
    render () {
        return (
            <div className="page-container tabs-wrapper">
                <Card title="Tab 的使用">
                    <Tab defaultActiveKey="1" onChange={e => {
                        console.log('当前选中', e)
                    }}>
                        <Tab.TabPane tab="标签1" key="1">第一个标签</Tab.TabPane>
                        <Tab.TabPane tab="标签2" key="2" disabled>第二个标签</Tab.TabPane>
                        <Tab.TabPane tab="标签3" key="3">第三个标签</Tab.TabPane>
                    </Tab>
                </Card>
                <Card title="带图标 Tab 的使用">
                    <Tab defaultActiveKey="1" onChange={e => {
                        console.log('当前选中', e)
                    }}>
                        <Tab.TabPane tab={
                            <span>
                                <AppleOutlined />
                                Apple
                            </span>
                        } key="1">第一个标签</Tab.TabPane>
                        <Tab.TabPane tab={
                            <span>
                                <AndroidOutlined />
                                Android
                            </span>
                        } key="2">第二个标签</Tab.TabPane>
                        <Tab.TabPane tab="标签3" key="3">第三个标签</Tab.TabPane>
                    </Tab>
                </Card>
                <Card title="动态控制 Tab">
                    <Tab
                        defaultActiveKey="1"
                        onChange={e => {
                            console.log('当前选中', e)
                        }}
                        onEdit={(key, action) => {
                            action === 'add' ? this.addTab({ key: new Date().getTime() }) : this.removeTab(Number(key))
                        }}
                        type="editable-card" >
                        {
                            this.state.panes.map(item => <Tab.TabPane tab={`标签${item.key}`} key={item.key}>第{item.key}个标签</Tab.TabPane>)
                        }
                    </Tab>
                </Card>
            </div>
        )
    }
}
