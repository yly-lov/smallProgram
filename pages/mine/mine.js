// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {

        link: '/pages/index/index',

        url: '/images/1.jpg'

      }, {

        link: '/pages/logs/logs',

        url: '/images/2.jpg'

      }, {

        link: '/pages/index/index',

        url: '/images/3.jpg'

      }

    ],

    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间
    companyName:"鸿博股份",
    companyNum:'00029XZ',
    isrz:true,
    // 后台返回来的布尔值，前台需要判断，如果是true，则isrz为“已认证”，否则是“未认证”，现在写死为true。
    time:"2002.3.5上市",//后台返回来的时间。
    gzrs:'20',//后台返回来的关注人数
    xhicon:true,
    //股份比例数据的设定
    proportion:26.66,
    xs:0.37,
    percent:'1.43%',
    maxPrice: 25.75,
    jknum : 25.85,
    minprice: 24.32,
    zsnum: 34.34,
    cjenum: 23.34,
    succpricenum: 27.60,
    succcount: '17.98万手',
    hslper: '0.09',
    //股东大会的图片
    item:'/images/2.jpg',
    //ir团队的信息
    irteam:[
      {
        head:'/images/2.jpg',
        headname:'姓名',
        positiondesc:'价值在线'
      },
      {
        head: '/images/2.jpg',
        headname: '姓名',
        positiondesc: '价值在线-产品经理'
      },
      {
        head: '/images/2.jpg',
        headname: '姓名',
        positiondesc: '价值在线-产品经理'
      },
    ],
    // // footerbar的数据data
    // navData:[
    //   {
    //     name: "提问",  //文本
    //     current: 1,    //是否是当前页，0不是  1是
    //     style: 0,     //样式
    //     ico: 'icon-shoucang',  //不同图标
    //     fn: 'gotoquestion'   //对应处理函数
    //   }, {
    //     name: "拜访",
    //     current: 0,
    //     style: 0,
    //     ico: 'icon-wode',
    //     fn: 'gotovisit'
    //   }, {
    //     name: "递名片",
    //     current: 0,
    //     style: 1,
    //     ico: 'icon-wode',
    //     fn: 'gotocard'
    //   }, 
    // ]
  },
  //点击左箭头返回上一页。
  callback:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  //点击心喜欢关注成功
  xh:function(ev){
    var that = this;
    if (that.data.xhicon === true){
      console.log("sssss")
      this.setData({
        gzrs: parseInt(that.data.gzrs) + 1
      })
      //需要发送一个请求给后台
    }else{
      console.log("aaaaaa")
      this.setData({
        gzrs: parseInt(that.data.gzrs) - 1
      })
      //需要发送一个请求给后台
    }
    this.setData({
      xhicon: (!that.data.xhicon)
    })
  },
  //点击股东大会进入股东会议详情:页面
  meet:function (ev){
    wx.navigateTo({
      url: "/pages/meetdetail/meetdetail",
    })
  },
  //footerbar页面的跳转
  gotoquestion:function (){
    wx.navigateTo({
      url: '/pages/question/question',
    });
  },
  gotovisit: function () {
    wx.navigateTo({
      url: '/pages/visit/visit',
    });
  },
  gotocard: function () {
    wx.navigateTo({
      url: '/pages/card/card',
    });
  },
  // 分享跳转
  _share:function (){
    console.log("share")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar({})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得popup组件
    this.footerbar = this.selectComponent("#footerbar");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})