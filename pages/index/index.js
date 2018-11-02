Page({
  /**
   * 页面的初始数据
   */
  data: {
    images: [
      "http://p6nix480q.bkt.clouddn.com/18-9-15/68427294.jpg",
      "http://p6nix480q.bkt.clouddn.com/18-7-6/36041900.jpg",
      "http://p6nix480q.bkt.clouddn.com/18-7-10/99610303.jpg"
    ],
    links: [
      "https://icuihai.com",
      "https://www.baidu.com",
      "https://www.jianshu.com"
    ],
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    indicatorActiveColor: '#fff',
    indicatorColor: '#000',
    swiperCurrent: 0
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    console.log(this.data.swiperCurrent);
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //图片点击事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.navigateTo({
      url: "../detail/detail?source="+this.data.links[this.data.swiperCurrent]
    })
  },
  navs: [{
    image: "http://p6nix480q.bkt.clouddn.com/18-4-4/80850158.jpg",
    text: "一"
  }, {
    image: "http://p6nix480q.bkt.clouddn.com/18-4-4/80850158.jpg",
    text: "二"
  }, {
    image: "http://p6nix480q.bkt.clouddn.com/18-4-4/80850158.jpg",
    text: "三"
  }, {
    image: "http://p6nix480q.bkt.clouddn.com/18-4-4/80850158.jpg",
    text: "四"
  }
  ],
  go: function (event) {
    wx.navigateTo({
      url: '../index?type=' + event.currentTarget.dataset.type
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