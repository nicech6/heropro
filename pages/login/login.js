// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 获取用户信息
  onGotUserInfo: function(e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    wx.setStorage({
      key: 'wx_userinfo',
      data: e.detail.userInfo,
    })
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，直接进入首页
          wx.switchTab({
            url: '../index/index',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getStorage({
      key: 'wx_userinfo',
      success: function(res) {
        if (res.data != null) {
          // 获取过个人信息后直接进入首页
          wx.switchTab({
            url: '../index/index',
          })
        }
      },
    })
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