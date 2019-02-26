var app = getApp()
Page({
  data: {
    navbar: ['热门', '关注', '消息'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
}) 