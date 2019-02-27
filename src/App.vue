<template>
  <div id="app"
       class="layout">
    <Button @click="isGroup = isGroup ? false : true">{{isGroup ? '隐藏分组': ' 显示分组'}}</Button>
    <!-- <kanbanSearch :searchParams="searchParams"></kanbanSearch> -->
    <kanbanboard :cardList="cardList"
                 :statusList="statusList"
                 :groupList="groupList"></kanbanboard>

  </div>
</template>
<script>
import { EventBus } from "@/tools";
import datas from "@/common/data";
import kanbanboard from "@/components/kanbanboard";
import kanbanSearch from "@/components/kanbanSearch";

export default {
  name: "App",
  data() {
    return {
      isGroup: false,
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
      this.cardListBase = [];
      this.cardListBase.push(...datas.cardList);

      this.statusListBase = [];
      this.statusListBase.push(...datas.statusList);
    },
    moveEnd(info) {
      // 移动卡片结束后
      console.log(" 移动卡片结束后 :::", info);
      this.changeStateNumber(info);
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

    changeStateNumber(info) {
      let _statusBase = this.statusListBase;
      let toState = info.evt.to.getAttribute("state");
      let fromState = info.evt.from.getAttribute("state");
      _statusBase.forEach(function(item, index) {
        if (fromState == item.state) {
          item.taskNumber = parseFloat(item.taskNumber) - 1 + "";
        }
        if (item.state == toState) {
          item.taskNumber = parseFloat(item.taskNumber) + 1 + "";
        }
      });

      this.statusListBase = [];
      this.statusListBase.push(..._statusBase);
    }
  },
  computed: {
    cardList: function() {
      let _cardList = this.cardListBase;

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
      _groupList = this.isGroup ? _groupList : [];
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
  beforeDestroy() {
    EventBus.$off("moveEnd", this.moveEnd);
    EventBus.$off("clickItem", this.clicked);
    EventBus.$off("search", this.searchHandle);
    EventBus.$off("addTask", this.addNewTask);
  },
  components: {
    kanbanboard,
    kanbanSearch
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
