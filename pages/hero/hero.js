// pages/hero/hero.js
Page({
  url: null,
  /**
   * 页面的初始数据
   */

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.type == "花木兰") {
      this.setData({
        url: "https://pvp.qq.com/act/a20180905herostory/index.html?id=154&ADTAG=pvp.storyweb"
      })
    }
    if (options.type == "妲己") {
      this.setData({
        url: "https://pvp.qq.com/act/a20180905herostory/index.html?id=109&ADTAG=pvp.storyweb"
      })
    }
    if (options.type == "大乔") {
      this.setData({
        url: "https://pvp.qq.com/act/a20180905herostory/index.html?id=191&ADTAG=pvp.storyweb"
      })
    }
    if (options.type == "蔡文姬") {
      this.setData({
        url: "https://pvp.qq.com/act/a20180905herostory/index.html?id=184&ADTAG=pvp.storyweb"
      })
    }
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