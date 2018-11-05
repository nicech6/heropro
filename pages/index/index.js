Page({
  /**
   * 页面的初始数据
   */
  data: {
    //图片url
    images: [
      "http://p6nix480q.bkt.clouddn.com/18-11-3/42215456.jpg",
      "http://p6nix480q.bkt.clouddn.com/18-11-3/33899259.jpg",
      "http://p6nix480q.bkt.clouddn.com/18-11-3/4922232.jpg"
    ],
    //跳转url
    links: [
      "http://shp.qpic.cn/ishow/2735101516/1539591626_-888937974_15089_sProdImgNo_2.jpg/0",
      "http://shp.qpic.cn/ishow/2735101814/1539845491_-888937974_13650_sProdImgNo_8.jpg/0",
      "http://shp.qpic.cn/ishow/2735102310/1540261193_704174346_2284_sProdImgNo_2.jpg/0"
    ],
    items: [{
      "name": "虞姬",
      "price": "100",
      "content": "虞姬，系项羽帐下的美人，什么名目，是妃子还是舞姬，不清楚。《史记》上只记载了虞姬在项羽被围于垓下。",
      "imgs": ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"]
    }, {
      "name": "女娲",
      "price": "102",
      'content': "女娲，中国上古神话中的创世神和始母神，又称娲皇，大地之母等。",
      "imgs": ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"]
    }, {
      "name": "露娜",
      "price": "125",
      "content": "自古以来，在暗夜中隐藏着神秘的刺客一族“荆氏”。他们掌握着代代相传的杀人之剑的秘诀，收受佣金为雇主服务，并且守口如瓶。",
      "imgs": ["http://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"]
    }],
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    indicatorActiveColor: '#fff',
    indicatorColor: '#000',

    // nav分类
    navs: [{
      image: "../image/tab1.png",
      text: "花木兰"
    }, {
      image: "../image/tab2.png",
      text: "妲己"
    }, {
      image: "../image/tab3.png",
      text: "大乔"
    }, {
      image: "../image/tab4.png",
      text: "蔡文姬"
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
    console.log(this.data.swiperCurrent);
    wx.navigateTo({
      url: "../detail/detail?source=" + this.data.links[this.data.swiperCurrent]
    })
  },

  onTap: function(event) {
    wx.switchTab({
      url: "../posts/post"
    });
  },

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
        url: '../mine/mine',
      })
    }
  },
  go: function(event) {
    wx.navigateTo({
      url: '../hero/hero?type=' + event.currentTarget.dataset.type
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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