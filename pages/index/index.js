Page({
  /**
   * 页面的初始数据
   */
  data: {
    //首页轮播图
    images: [],
    //首页列表
    items: [],
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    indicatorActiveColor: '#fff',
    indicatorColor: '#000',
    mPageNo: 1,
    mPageSize: 10,
    // nav分类
    navs: [{
      image: "../image/tab1.png",
      text: "国际"
    }, {
      image: "../image/tab2.png",
      text: "国内"
    }, {
      image: "../image/tab3.png",
      text: "财经"
    }, {
      image: "../image/tab4.png",
      text: "体育"
    }],
  },
  //轮播图的切换事件
  swiperChange: function(e) {
    // console.log(this.data.swiperCurrent);
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //图片点击事件
  swipclick: function(e) {
    console.log(e.currentTarget.dataset.url);
    wx.navigateTo({
      url: "../detail/detail?source=" + e.currentTarget.dataset.url
    })
  },

  // 底部Tab事件
  onTabItemTap(item) {
    // console.log(item.index)
    if (item.index == 0) {
      wx.switchTab({
        url: '../index/index',
      })
    }
    if (item.index == 1) {
      console.log(item.index)
      wx.switchTab({
        url: '../choice/choice',
      })
    }
    if (item.index == 2) {
      console.log(item.index)
      wx.switchTab({
        url: '../mine/mine',
      })
    }
  },
  //分类事件
  go: function(event) {
    // wx.navigateTo({
    //   url: '../hero/hero?type=' + event.currentTarget.dataset.type
    // })
    wx.showToast({
      title: event.currentTarget.dataset.type,
      icon: '',
      image: '',
      duration: 500,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //列表事件
  listClick: function(e) {
    console.log(`点击了${e.currentTarget.dataset.url}`)
    wx.navigateTo({
      url: "../detail/detail?source=" + e.currentTarget.dataset.url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // http请求
    wx.request({
      url: 'https://v.juhe.cn/weixin/query?',
      data: {
        key: "51b774eed86b88ea298b009f9d3e043a",
        pno: that.data.mPageNo,
        ps: that.data.mPageSize,
        dtype: "json"
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if (res.data != null && res.data.result != null) {
          console.log(res.data)
          if (res.data.result.list.length > 3) {
            that.setData({
              images: res.data.result.list.slice(0, 3),
              items: res.data.result.list.slice(3, res.data.result.list.length)
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
    setTimeout(function() {
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    //上拉加载更多
    this.setData({

    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})