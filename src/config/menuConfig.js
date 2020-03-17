const MenuConfig = [
    {
        title: '首页',
        key: '/root/dashboard'
    },
    {
        title: 'UI',
        key: '/root/ui',
        children: [
            {
                title: '按钮',
                key: '/root/ui/buttons',
            },
            {
                title: '弹框',
                key: '/root/ui/modals',
            },
            {
                title: 'Loading',
                key: '/root/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/root/ui/notifications',
            },
            {
                title: '全局Message',
                key: '/root/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/root/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/root/ui/gallery',
                disabled: true,
            },
            {
                title: '轮播图',
                key: '/root/ui/carousel',
            }
        ]
    }
];

export default MenuConfig;
