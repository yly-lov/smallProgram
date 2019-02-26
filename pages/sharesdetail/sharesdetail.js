Page({
  data: {
    // footerbar的数据data
    navData: [
      {
        name: "提问",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: 'icon-shoucang',  //不同图标
        fn: 'gotoquestion'   //对应处理函数
      }, {
        name: "拜访",
        current: 0,
        style: 0,
        ico: 'icon-wode',
        fn: 'gotovisit'
      }, {
        name: "递名片",
        current: 0,
        style: 1,
        ico: 'icon-wode',
        fn: 'gotocard'
      },
    ],
    showtab: 0,  //顶部选项卡索引
    showtabtype: '', //选中类型
    tabnav: {},  //顶部选项卡数据
    testdataall: [],  //所有数据
    testdata1: [], //数据列表，公告中的数据
    testdata1_1:[],//公告中第一条数据
    testdata1_2: [],//公告中第二条数据
    testdata1_3: [],//公告中第三条数据
    testdata2: [], //数据列表
    testdata3: [], //数据列表
    testdata4: [], //数据列表
    testdata5: [], //数据列表
    startx: 0,  //开始的位置x
    endx: 0, //结束的位置x
    critical: 100, //触发切换标签的临界值
    marginleft: 0,  //滑动距离
    directorsIntro:[],//董事简介
    isFolded: true,
  },
  onLoad: function () {
    this.setData({
      tabnav: {
        tabnum: 4,
        tabitem: [
          {
            "id": 1,
            "type": "A",
            "text": "公告"
          },
          {
            "id": 2,
            "type": "B",
            "text": "活动"
          },
          {
            "id": 3,
            "type": "C",
            "text": "问答"
          },
          {
            "id": 4,
            "type": "D",
            "text": "简介"
          },
        ]
      },
    })
    this.fetchTabData(0);
  },
  change: function (e) {
    this.setData({
      isFolded: !this.data.isFolded,
    })
  },

  fetchData: function (t) {  //生成数据
    const newquestions = [];
    for (let i = 0; i <2; i++) {
      newquestions.push({
        "id": i + 1,
        "time_1":"2019-2-2",
        "url_1":"/images/1.jpg",
        "text_1": "服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在",
        "time_2":"2018-2-2",
        "url_2":"/images/2.jpg",
        "text_2":"服务名称适用品类服务实施详情服务期限服务",
        "time_3": "2016-2-2",
        "url_3": "/images/3.jpg",
        "text_3": "服务名称适用品类服务实施详情服",
      })
    }
    return newquestions
  },
  fetchDataAsk:function(t){
    const askQuestion = [];
    for(var i=0;i<4;i++){
      askQuestion.push({
        "avatar":`/images/${i+1}.jpg`,
        "ask":'毛利是多少?服务名称适用品类服务实施详情服服务名称适用品类服务实施详情服服务名称适用品类服务实施详情服服务名称适用品类服务实施详情服服务名称适用品类服务实施详情服',
        "config": `/images/home.png`,
        "question": "平均金额：2000百亿服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在",
      })
    }
    return askQuestion
  },
  fetchDataAct:function(t){
    const activity = [];
    for(var i=0;i<3;i++){
      activity.push({
        "text":"适用品类服务实施详情服务期限服务生效时间",
        "time":"2018-2-2",
        "actDate":"2013-6-6",
        "actContent":"[鸿博股份]房地产行业2019年度投资2019年度投资策",
        "url":"/images/1.jpg",
        "actName":"投资者活动调研",
        "actform":"实地调研",
        "actresearchDate":"2019-2-1",
      })
    }
    return  activity
  },
  fetchTabData: function (i) {
    console.log(Number(i));
    // 点击哪个就请求回来哪条数据
    switch (Number(i)) {
      case 0:
        this.setData({
          testdata1_1: this.fetchData('A'),//分别执行对应接口的函数
          testdata1_2: this.fetchData('A'),
          testdata1_3: this.fetchData('A'),
        })
        break;
      case 1:
        this.setData({
          testdata2: this.fetchDataAct('B')//活动
        })
        break;
      case 2:
        this.setData({
          testdata3: this.fetchDataAsk('C')//问答
        })
        break;
      case 3:
        this.setData({
          testdata4: [
            {
              "name": "公司名称",
              "text": "青岛海尔有限公司"
            },
            {
              "name": "成立日期",
              "text": "2007-4-4"
            },
            {
              "name": "法人",
              "text": "张建洲"
            },
            {
              "name": "所属区域",
              "text": "山东省"
            },
            {
              "name": "企业性质",
              "text": "集体性质"
            },
            {
              "name": "实际控制人",
              "text": "海尔集团公司"
            },
            {
              "name": "主营业务",
              "text": "房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策"
            }
          ],
          directorsIntro:[
            {
              "url":"/images/4.jpg",
              "name":"钟玉",
              "position":"董事长",
              "salary":"153万(2017年)",
              "desc":"房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度",
            },
            {
              "url": "/images/4.jpg",
              "name": "徐曙",
              "position": "非独立董事",
              "salary": "153万(2017年)",
              "desc": "房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度投资2019年度投资策房地产行业2019年度",
            }
          ]
        })
        break;
      default:
        return;
    }
  },
  
  setTab: function (e) { //设置选项卡选中索引
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: Number(edata.tabindex),
      showtabtype: edata.type
    })
    this.fetchTabData(edata.tabindex);
  },
  scrollTouchstart: function (e) {
    let px = e.touches[0].pageX;
    this.setData({
      startx: px
    })
  },
  scrollTouchmove: function (e) {
    let px = e.touches[0].pageX;
    let d = this.data;
    this.setData({
      endx: px,
    })
    if (px - d.startx < d.critical && px - d.startx > -d.critical) {
      this.setData({
        marginleft: px - d.startx
      })
    }
  },
  scrollTouchend: function (e) {
    let d = this.data;
    if (d.endx - d.startx > d.critical && d.showtab > 0) {
      this.setData({
        showtab: d.showtab - 1,
      })
      // this.fetchTabData(d.showtab-1);
    } else if (d.endx - d.startx < -d.critical && d.showtab < this.data.tabnav.tabnum - 1) {
      this.setData({
        showtab: d.showtab + 1,
      })
    }
    this.fetchTabData(d.showtab);
    this.setData({
      startx: 0,
      endx: 0,
      marginleft: 0
    })
  },
})
