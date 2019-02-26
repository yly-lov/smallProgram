// pages/meetdetail/meetdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meet_detail:'股东大会股东大会股东大会',
    listData:[
      {
        "name":'公司名称',
        "text":"价值在线",
      },
      {
        "name":"会议名称",
        "text":"1次临时股东大会ddddddddddd",
      },
      {
        "name":"会议类型",
        "text":"临时股东大会",
      },
      {
        "name":"召开时间",
        "text":"2019/2/3",
      },
      {
        "name":"召开地址",
        "text":"大连"
      },
      {
        "name":"股权登记日",
        "text":"2019/1/2",
      },
      {
        "name":"登记截止日",
        "text":"2019/3/3",
      }
    ],
    // 会议内容，二维数组形式
    content_1:[
      {//二维数组
        id: 1,
        name: '会议1',
        count: 1,
        twodata: [{
          'id': 11,
          'name': '巴拉巴拉1'
        }, 
        {
          'id': 12,
          'name': '巴拉巴拉1'
        }]
      },
      {
        id: 2,
        name: '会议2',
        count: 1,
        // twodata: [{
        //   'id': 13,
        //   'name': '巴拉巴拉2'
        // },
        //  {
        //   'id': 14,
        //    'name': '巴拉巴拉2'
        // }]
      },
      {
        id: 3,
        name: '会议3',
        count: 1,
        // twodata: [{
        //   'id': 15,
        //   'name': '巴拉巴拉3'
        // },
        //  {
        //   'id': 16,
        //    'name': '巴拉巴拉3'
        // }]
      }
    ],
    //附件
    document:'授权委托书',
    pdf:'采用累计投票制度',
  },
  //点击左箭头返回上一页
  back:function(){
    wx.navigateBack({
      delta:1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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