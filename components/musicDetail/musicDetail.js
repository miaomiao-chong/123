// components/musicDetail/musicDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    clickId:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e){
      console.log(e.currentTarget.dataset.id);
      let clickId=e.currentTarget.dataset.id
      this.setData({
        clickId
      })
      wx.navigateTo({
        url: '../../pages/lyric/lyric?id='+clickId,
      })
    }
  }
})
