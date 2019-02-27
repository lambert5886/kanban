  const cardList = [{
      taskId: "#US0001",
      description: "未开始-提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
      userName: "user1",
      userId: "userId_01",
      groupId: "group_02",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "未开始",
      taskState: "03",
      headPortrait: require("@/assets/user_02.png")
    },
    {
      taskId: "#US0002",
      description: "设计开发-提供用户登录功能1,提供用户登录功能1",
      userName: "user1",
      userId: "userId_02",
      groupId: "group_02",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "设计开发",
      taskState: "02",
      headPortrait: require("@/assets/user_02.png")
    },
    {
      taskId: "#US0005",
      description: "未开始-提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
      userName: "user1",
      userId: "userId_05",
      groupId: "group_01",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "测试",
      taskState: "04",
      headPortrait: require("@/assets/user_02.png")
    },
    {
      taskId: "#US0006",
      description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1",
      userName: "user1",
      userId: "userId_06",
      groupId: "group_01",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "测试",
      taskState: "01",
      headPortrait: require("@/assets/user_02.png")
    },
    {
      taskId: "#US0007",
      description: "未开始-提供用户登录功能1,IMG提供用户登录功能1提供用户登录功能1",
      userName: "user1",
      userId: "userId_07",
      groupId: "group_01",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "测试",
      taskState: "01",
      headPortrait: require("@/assets/user_02.png")
    },
    {
      taskId: "#US0008",
      description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1",
      userName: "user1",
      userId: "userId_08",
      groupId: "group_01",
      bgColor: {
        background: "#f8d6af"
      },
      taskStateStr: "测试",
      taskState: "02",
      headPortrait: require("@/assets/user_02.png")
    }
  ];

  const statusList = [{
      stateStr: "未开始",
      state: "01",
      taskNumber: "2"
    },
    {
      stateStr: "设计开发",
      state: "02",
      taskNumber: "2"
    },
    {
      stateStr: "测试",
      state: "03",
      taskNumber: "1"
    },
    {
      stateStr: "发布",
      state: "04",
      taskNumber: "1"
    },
    {
      stateStr: "上线",
      state: "05",
      taskNumber: "0"
    }
  ];

  export default {
    cardList,
    statusList
  }
