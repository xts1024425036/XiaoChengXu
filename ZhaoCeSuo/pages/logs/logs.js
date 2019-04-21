// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    // 当前页数
    currentPage:1,
    // 总页数
    totalpage:Number,
    // 是否加载
    isLoad:true,
    // 是否没有了
    isMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  // 请求数据
  getList(){
    wx.request({
      url:'https://route.showapi.com/255-1',
      data:{
        showapi_appid:"91918",
        showapi_sign:"1b647a1067e447369a20f4b3e1187797",
        page:this.data.currentPage
      },
      success:res =>{
        console.log(res)
        this.setData({
          list: this.data.list.concat(res.data.showapi_res_body.pagebean.contentlist),
          totalpage: res.data.showapi_res_body.pagebean.allPages,
          isLoad:false
        })
      }
    })
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
      var page = this.data.currentPage
      if(page < this.data.totalpage){
        page ++
        this.setData({
          isLoad: true,
          currentPage: page
        })
        this.getList()
      }else{
        this.setData({
          isLoad: true,
          isMore:true
        })
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})