const menuList = [
  {
    title: '导航', 
    key: '/home', 
    icon: 'home', 
    isPublic: true, 
  },
  {
    title: '用户',
    key: '/user',
    icon: 'user'
  },
  {
    title: '商品',
    key: '/products',
    icon: 'appstore',
    children: [ 
      {
        title: '详情',
        key: '/goods',
        icon: 'bars',
      },
      {
        title: '订单',
        key: '/order',
        icon: 'bars'
      },
      {
        title: '评论',
        key: '/comment',
        icon: 'bars',
      },
    ]
  },
  {
    title: '点击量',
    key: '/click_num',
    icon: 'area-chart',
  },
  {
    title: '日志',
    key: '/log',
    icon: 'safety',
  }
]

export default menuList