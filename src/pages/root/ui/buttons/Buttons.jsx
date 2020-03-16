import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    DownloadOutlined,
    SwapOutlined,
    BackwardOutlined,
    ForwardOutlined
} from '@ant-design/icons';
import './buttons.less';

export default class Buttons extends Component {
    state = {
        loading: true,
        size: 'middle'
    }
    render() {
        return (
            <div className="page-container buttons-wrapper">
                <Card title="基础按钮">
                    <Button className="button" type="primary">iMooc</Button>
                    <Button className="button">iMooc</Button>
                    <Button className="button" type="dashed">iMooc</Button>
                    <Button className="button" type="danger">iMooc</Button>
                    <Button className="button" disabled>iMooc</Button>
                </Card>
                <Card title="图文按钮">
                    <Button className="button" icon={ <PlusOutlined /> }>创建</Button>
                    <Button className="button" icon={ <EditOutlined /> }>编辑</Button>
                    <Button className="button" icon={ <DeleteOutlined /> }>删除</Button>
                    <Button className="button" shape="circle" icon={ <SearchOutlined /> }></Button>
                    <Button className="button" type="primary" icon={ <SearchOutlined /> }>搜索</Button>
                    <Button className="button" type="primary" shape="round" icon={ <DownloadOutlined /> }>下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button className="button" type="primary" loading={this.state.loading} >iMooc</Button>
                    <Button className="button" type="primary" shape="circle" loading={this.state.loading} icon={ <SwapOutlined /> }></Button>
                    <Button className="button" loading={this.state.loading}>加载</Button>
                    <Button className="button" shape="circle" icon={ <SwapOutlined /> } loading={this.state.loading}></Button>
                    <Button className="button" type="primary" onClick={() => {
                        this.setState({
                            loading: !this.state.loading
                        })
                    }}>
                        {
                            this.state.loading ? '关闭' : '开启'
                        }
                    </Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={ <BackwardOutlined /> }>后退</Button>
                        <Button type="primary" icon={ <ForwardOutlined /> } >前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={e => {
                        this.setState({
                            size: e.target.value
                        })
                    }}>
                        <Radio value="small">小</Radio>
                        <Radio value="middle">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button className="button" type="primary" size={this.state.size}>iMooc</Button>
                    <Button className="button" size={this.state.size}>iMooc</Button>
                    <Button className="button" type="dashed" size={this.state.size}>iMooc</Button>
                    <Button className="button" type="danger" size={this.state.size}>iMooc</Button>
                </Card>
            </div>
        );
    }
}
