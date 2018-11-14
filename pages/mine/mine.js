// pages/mine/mine.js
var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: '../image/tab1.png',
      nickName: '哈哈'
    },
    source: 'https://icuihai.com'
  },

  onGotUserInfo: function(e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

    var that = this
    wx.getStorage({
      key: 'wx_userinfo',
      success: function(res) {
        var nickname = "userInfo.nickName"
        var avatarUrl = "userInfo.avatarUrl"
        that.setData({
          [nickname]: res.data.nickName,
          [avatarUrl]: res.data.avatarUrl
        })
        // console.log(res.data)
      },
    })

    //模拟http请求
    // wx.request({
    //   url: 'http://a1.dytest.dayi.im/fudaojun/teacher/audit/headimage/',
    //   header: {
    //     'content-type': 'application/json',
    //     "token": "924190bbe7d41fee6b5517e4f08f80fc"
    //   },
    //   success: function(res) {
    //     // console.log(res.data.data)
    //     var avatarUrl = 'userInfo.avatarUrl'
    //     // that.setData({
    //     //   [avatarUrl]: res.data.data
    //     // })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})