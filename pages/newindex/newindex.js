// pages/newindex/newindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list1:[
        {
         id:1,
         name:'图片一',
         src:"/static/images/1.png"
        },
        {
          id: 2,
          name:'图片二',
          src: "/static/images/2.png"
        },{
          id: 3,
          name:"图片三",
          src: "/static/images/3.png"
        },{
          id: 4,
          name:"图片四",
          src: "/static/images/4.png"
        }
      ],
    list2: ['111', '222', '3333', '444'],
    srcUrl: "/static/images/4.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

})