// pages/lyric/lyric.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lrc:'',
    lrc2:'',
    id:'',
    isShowTimeVersion:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id:options.id
    })
    this. _getlyric()
  },
  async _getlyric(){
    await wx.request({
      url: `https://api.imjad.cn/cloudmusic/?type=lyric&id=${this.data.id}`,   
      success: (result) => {
        // console.log(result);
        this.setData({
          lrc:result.data.lrc.lyric
        })
        this.withoutTime()
      },

    })
  },
  withoutTime(){
    let lrc2=this.data.lrc
    // 注意正则表达式
    lrc2=lrc2.replace(/(\[.*\])/g,'')
    // console.log(lrc2);
    this.setData({
      lrc2
    })
  },
  // 点击按钮变化
  change(e){
    let flag=e.currentTarget.id
    if(flag==='noTime'){
      this.setData({
        isShowTimeVersion:false
      })
    }else{
      this.setData({
        isShowTimeVersion:true
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  copy(){
    if(this.data.isShowTimeVersion){
      wx.setClipboardData({
        data:this.data.lrc,   //一个疑问 这里是不能用三目运算符吗
        success :(res)=>{
          // console.log(res);
        }
      })
    }else{
      wx.setClipboardData({
        data:this.data.lrc2,   
        success :(res)=>{
          // console.log(res);
        }
      })
    }
 
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