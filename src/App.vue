<template>
  <div id="app" class="layout">
   
       
  </div>
</template>
<script>
import { EventBus } from "@/tools";

import kanbanboard from "@/components/kanbanboard";
import kanbanSearch from "@/components/kanbanSearch";
import textEditor from '@/components/text-editor/text-editor.vue';

export default {
  name: "App",
  data() {
    return {
      cardListBase: [],
      groupListBase: [],
      statusListBase: []
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    EventBus.$on("moveEnd", this.moveEnd);
    EventBus.$on("clickItem", this.clicked);
    EventBus.$on("search", this.searchHandle);
    EventBus.$on("addTask", this.addNewTask);
  },
  methods: {
    fetchData() {
      let _cardList = [
        {
          taskId: "#US0001",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_01",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "未开始",
          taskState: "01",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0002",
          description:
            "设计开发-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_02",
          groupId: "group_02",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "设计开发",
          taskState: "02",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0003",
          description:
            "设计开发-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_03",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "02",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0004",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_04",
          groupId: "group_03",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "01",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0005",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_05",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "04",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0006",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_06",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "01",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0007",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_07",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "01",
          headPortrait: require("@/assets/user_02.png")
        },
        {
          taskId: "#US0008",
          description:
            "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
          userName: "user1",
          userId: "userId_08",
          groupId: "group_01",
          bgColor: { background: "#f8d6af" },
          taskStateStr: "测试",
          taskState: "02",
          headPortrait: require("@/assets/user_02.png")
        }
      ];

      this.cardListBase = [];
      this.cardListBase.push(..._cardList);
        let _statusList = [
          {
            stateStr: "未开始",
            state: "01",
            taskNumber: "4"
          },
          {
            stateStr: "设计开发",
            state: "02",
            taskNumber: "3"
          },
          {
            stateStr: "测试",
            state: "03",
            taskNumber: "0"
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

      this.statusListBase = [];
      this.statusListBase.push(..._statusList);
    },
    moveEnd(info) {
      // 移动卡片结束后
      console.log(" 移动卡片结束后 :::", info);
      this.changeStateNumber(info)
    },
    clicked(info) {
      // 点击卡片方法
      console.log(" 点击卡片方法 ::: ", info);
    },
    searchHandle(info) {
      // 查询方法
      console.log("查询  ::: ", info);
    },
    addNewTask(info) {
      console.log("  添加任务  :::", info);
    },
    addBaseCard(cards, status) {
      let _cards = cards;
      let _status = status;
      let _arr = [];
      _cards.forEach(function(cardItem, index) {
        _status.forEach(function(statusItem, index) {
          if (cardItem.taskState == statusItem.state) {
            _arr.push(statusItem.state);
          }
        });
      });
      let filteredArr = Array.from(new Set(_arr));

      let hasState = [];
      _status.forEach(function(item, index) {
        hasState.push(item.state);
      });
      let _hasState = Array.from(new Set(hasState));

      let noState = [];
      _hasState.forEach(function(item, index) {
        if (!filteredArr.includes(item)) {
          noState.push(item);
        }
      });
      console.log(cards, status);

      return noState;
    },
    changeStateNumber( info){
      let _statusBase = this.statusListBase;
      let toState = info.evt.to.getAttribute('state');
     
      _statusBase.forEach(function(item, index){
     
        if(info.item.taskState == item.state){
          item.taskNumber = (parseFloat(item.taskNumber) - 1) + '';
        };
        if(item.state == toState){
          item.taskNumber = (parseFloat(item.taskNumber) + 1) + '';
        }
      });

    this.statusListBase = [];
    this.statusListBase.push(..._statusBase);

    }
  },
  computed: {
    cardList: function() {
      let _noState = this.addBaseCard(this.cardListBase, this.statusListBase);
      let _cardList = this.cardListBase;
      _noState.forEach(function(item, index) {
  
        _cardList.push({userId: "userId" + item+ index, taskState: item,})
      });

      return _cardList;
    },
    groupList: function() {
      let _groupList = [
        { text: "产品待办事项" },
        {
          text: "用户登录",
          groupId: "group_01"
        },
        {
          text: "创建代码仓库",
          groupId: "group_02"
        },
        {
          text: "未知项",
          groupId: "group_03"
        }
      ];

      return _groupList;
    },
    statusList: function() {
      let _statusList = this.statusListBase;
      return _statusList;
    },
    searchParams: function() {
      return [
        {
          type: "select",
          label: "需求名",
          params: "name"
        },
        {
          type: "input",
          label: "需求名称",
          params: "name"
        },
        {
          type: "select",
          label: "编号编号",
          params: "number",
          options: [{ value: "01", label: "一" }, { value: "02", label: "二" }]
        },
        {
          type: "input",
          label: "需求类型",
          params: "types"
        },
        {
          type: "input",
          label: "需求状态",
          params: "status"
        },
        {
          type: "input",
          label: "所属需求项",
          params: "name"
        },
        {
          type: "input",
          label: "优先级",
          params: "first"
        }
      ];
    }
  },
  beforeDestroy(){
      EventBus.$off("moveEnd", this.moveEnd);
    EventBus.$off("clickItem", this.clicked);
    EventBus.$off("search", this.searchHandle);
    EventBus.$off("addTask", this.addNewTask);
  },
  components: {
    kanbanboard,
    kanbanSearch,
    textEditor
  }
};
</script>
<style lang="less">
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.aside {
  flex-direction: row !important;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: #f9f9f9 !important;
}

.router-span {
  display: block;
  width: 100%;
  height: 100%;
}

.layout-footer-center {
  background: #21488a !important;
  color: #fff;
  z-index: 100;
}

.ivu-layout-sider-trigger {
  background: transparent !important;
}
</style>