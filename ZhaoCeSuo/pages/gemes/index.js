// pages/gemes/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue : "",
    gameList:[],
    gridCol: 2,
    skin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  showList(e){
   
    // 跳转页面
    wx.navigateTo({
      // id传值
      url: "../gemesList/index?id=" + e.currentTarget.dataset.id
    })
    // console.log(e.currentTarget.dataset.id)
  },
  getValue(e){
    this.setData({
      searchValue: e.detail.value
    })
  },
  search() {
    wx.showLoading({
      title: '加载中',
    })
    var v = this.data.searchValue;
    wx.request({
      url: 'https://route.showapi.com/1698-3',
      data:{
        showapi_appid:"91918",
        showapi_sign:"1b647a1067e447369a20f4b3e1187797",
        name:v
      },
      success:res =>{
        wx.hideLoading()
        var arr = [];
        for(var i=0;i<res.data.showapi_res_body.games.length;i++){
          arr.push({
            id: res.data.showapi_res_body.games[i].gameId,
            name: res.data.showapi_res_body.games[i].name,
            image:"http://placehold.it/300X300"
          })
        }
        this.setData({
          gameList:arr
        })
        // console.log(this.data.gameList)
      }
    })
  }
})