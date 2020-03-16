import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import MenuConfig from 'src/config/menuConfig';
import './nav-left.less'

const { SubMenu } = Menu;

class NavLeft extends Component {
    state = {}
    componentDidMount () {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        });
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        });
    }
    render () {
        return (
            <>
            <div className="logo">
                <img src="/static/logo-ant.svg" alt="logo" />
                <h1>Imooc MS</h1>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={ this.props.location.pathname }>
                { this.state.menuTreeNode }
            </Menu>
            </>
        );
    };
};

export default withRouter(NavLeft);
