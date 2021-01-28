// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcomeAnimation2:false,  //消失动画
    showSongList:false,     //welcome动画消失以后出现的
    addclass:false,   //控制输入框样式
    inputValue:'',     //输入内容
    musicList:[
    //   {
    //     "id": 354799,
    //     "name": "123",
    //     "artists": [
    //     {
    //     "id": 11569,
    //     "name": "Fusion乐团",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     },
    //     {
    //     "id": 6453,
    //     "name": "张震岳",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     }
    //     ],
    //     "album": {
    //     "id": 35009,
    //     "name": "如果未来",
    //     "artist": {
    //     "id": 0,
    //     "name": "",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     },
    //     "publishTime": 1199462400000,
    //     "size": 11,
    //     "copyrightId": 0,
    //     "status": 1,
    //     "picId": 38482906984174,
    //     "mark": 0
    //     },
    //     "duration": 228911,
    //     "copyrightId": 0,
    //     "status": 0,
    //     "alias": [],
    //     "rtype": 0,
    //     "ftype": 0,
    //     "mvid": 0,
    //     "fee": 0,
    //     "rUrl": null,
    //     "mark": 0
    //     },
    //     {
    //     "id": 1312711592,
    //     "name": "123",
    //     "artists": [
    //     {
    //     "id": 904046,
    //     "name": "Jess Glynne",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     }
    //     ],
    //     "album": {
    //     "id": 73845448,
    //     "name": "Always In Between (Deluxe)",
    //     "artist": {
    //     "id": 0,
    //     "name": "",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     },
    //     "publishTime": 1539273600000,
    //     "size": 17,
    //     "copyrightId": 7002,
    //     "status": 3,
    //     "picId": 109951164090240281,
    //     "mark": 0
    //     },
    //     "duration": 190328,
    //     "copyrightId": 7002,
    //     "status": 0,
    //     "alias": [],
    //     "rtype": 0,
    //     "ftype": 0,
    //     "mvid": 10798622,
    //     "fee": 1,
    //     "rUrl": null,
    //     "mark": 270336
    //     },
    //     {
    //     "id": 566013815,
    //     "name": "123",
    //     "artists": [
    //     {
    //     "id": 12957067,
    //     "name": "Swaggy Z",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     }
    //     ],
    //     "album": {
    //     "id": 39203081,
    //     "name": "123",
    //     "artist": {
    //     "id": 0,
    //     "name": "",
    //     "picUrl": null,
    //     "alias": [],
    //     "albumSize": 0,
    //     "picId": 0,
    //     "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    //     "img1v1": 0,
    //     "trans": null
    //     },
    //     "publishTime": 1526947200000,
    //     "size": 1,
    //     "copyrightId": 0,
    //     "status": 0,
    //     "picId": 109951163312014780,
    //     "mark": 0
    //     },
    //     "duration": 206053,
    //     "copyrightId": 0,
    //     "status": 0,
    //     "alias": [],
    //     "rtype": 0,
    //     "ftype": 0,
    //     "mvid": 0,
    //     "fee": 0,
    //     "rUrl": null,
    //     "mark": 64
    //     }
    ]
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  //输入框获得焦点
  isfocus(e){
    if(e.type){
      this.setData({
        addclass:true
      })
    }
    // this.setData({
    //   welcome:false
    // })
  },
  // 失去焦点
  clearclass(e){
    if(e.type){
      this.setData({
        addclass:false
      })
    }
  },
  // 整体焦点获取，开场动画消失并且出现音乐列表
  iswelcome(e){
    console.log(e);
    if(e.type){
      this.setData({
        welcomeAnimation2:true,
        showSongList:true
      })
    }
 
  },
  //点击搜索
  click(){
    this._getMusicDetail(this.data.inputValue)
  },
  //获取输入的内容(搜索用)
  handleInput(e){
    let inputValue=e.detail.value
    this.setData({
      inputValue
    })
  },
  // 获取输入的内容（优化用 里面输入框没动西了清空数组）
  handleCurrentInput(e){
    let currentInput=e.detail.value
    // console.log(currentInput);
    if(!currentInput){
      this.setData({
        musicList:[]
      })
    }
  },
  //得到音乐list并放到data
  async _getMusicDetail(value){
   await wx.request({
      url:`http://musicapi.leanapp.cn/search?keywords=${value}`,
      method:"POST",
      success: (result) => {
        // console.log(url);
        // console.log(result);
        this.setData({
          musicList:result.data.result.songs
        })
      },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})