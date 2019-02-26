// component/footerbar/footerbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value: '分享'
    },
    fn:{
      type: Function,
      value: 'fn'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    ico:{
      type: String,
      value:"icon-shoucang"
    },
    name:{
      type:String,
      value:"内容"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // footerbar的数据data
    navData: [
      {
        name: "提问",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: 'icon-shoucang',  //不同图标
        fn: 'gotoquestion'   //对应处理函数
      }, {
        name: "拜访",
        current: 0,
        style: 0,
        ico: "icon-wode",
        fn: "gotovisit"
      }, {
        name: "递名片",
        current: 0,
        style: 1,
        ico: 'icon-wode',
        fn: 'gotocard'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _share() {
      //触发取消回调
      this.triggerEvent("share")
    },
  }
})
