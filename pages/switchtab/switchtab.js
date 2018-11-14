// pages/switchtab/switchtab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    type: "top",
  },
  bindChange: function(e) {
    console.log("滑动事件")
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    if (e.detail.current == 0) {
      that.setData({
        type: "top"
      })
    }
    if (e.detail.current == 1) {
      that.setData({
        type: "shehui"
      })
    }
    if (e.detail.current == 2) {
      that.setData({
        type: "guonei"
      })
    }
    if (e.detail.current == 3) {
      that.setData({
        type: "yule"
      })
    }
    if (e.detail.current == 4) {
      that.setData({
        type: "tiyu"
      })
    }
    if (e.detail.current == 5) {
      that.setData({
        type: "junshi"
      })
    }
    that.getData()
  },
  swichNav: function(e) {

    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      if (e.target.dataset.current == 0) {
        that.setData({
          type: "top"
        })
      }
      if (e.target.dataset.current == 1) {
        that.setData({
          type: "shehui"
        })
      }
      if (e.target.dataset.current == 2) {
        that.setData({
          type: "guonei"
        })
      }
      if (e.target.dataset.current == 3) {
        that.setData({
          type: "yule"
        })
      }
      if (e.target.dataset.current == 4) {
        that.setData({
          type: "tiyu"
        })
      }
      if (e.target.dataset.current == 5) {
        that.setData({
          type: "junshi"
        })
      }
      that.getData()
    }
    console.log("switchNav" + e.target.dataset.current)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.getData()

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  getData: function() {
    var that = this
    console.log("---getdata")
    // http请求
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?',
      data: {
        key: "d186bd728f85fcf720e77d07dc4079c8",
        type: that.data.type,
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if (res.data != null && res.data.result != null) {
          console.log(res.data)
          if (res.data.result.data.length > 3) {
            that.setData({
              images: res.data.result.data.slice(0, 3),
              items: res.data.result.data.slice(3, res.data.result.data.length)
            })
          }
        }
      },
      fail: function(res) {}
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