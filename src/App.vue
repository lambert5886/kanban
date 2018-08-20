<template>
  <div id="app" class="layout">
      <kanbanSearch :searchParams="searchParams"></kanbanSearch>
    <kanbanboard 
          :cardList="cardList" 
         
          :statusList="statusList"
         ></kanbanboard>
  </div>
</template>
<script>
 import { EventBus } from '@/tools';
 
  import kanbanboard from '@/components/kanbanboard';
  import kanbanSearch from '@/components/kanbanSearch';


  export default {
    name: 'App',
    data() {
      return {
        cardListData: [],
        groupListData: [],
        statusListData: []

      }
    },
    mounted(){
      EventBus.$on('moveEnd', this.moveEnd);
      EventBus.$on('clickItem', this.clicked);
      EventBus.$on('search', this.searchHandle);
      EventBus.$on('addTask', this.addNewTask);
      let _cardList = [
         
          {
            taskId: "#US0002",
            description: "设计开发-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_02",
            groupId: 'group_02',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "设计开发",
            taskState: '02',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0003",
            description: "设计开发-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_03",
            groupId: 'group_01',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '02',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0004",
            description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_04",
            groupId: 'group_03',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '01',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0005",
            description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_05",
            groupId: 'group_01',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '04',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0006",
            description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_06",
            groupId: 'group_01',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '01',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0007",
            description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_07",
            groupId: 'group_01',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '01',
            headPortrait: require('@/assets/user_02.png'),
          },
          {
            taskId: "#US0008",
            description: "未开始-提供用户登录功能1,IMG提供用户登录功能1,提供用户登录功能1,提供用户登录功能1,提供用户登录功能1",
            userName: "user1",
            userId: "userId_08",
            groupId: 'group_01',
            bgColor: { background: '#f8d6af' },
            taskStateStr: "测试",
            taskState: '03',
            headPortrait: require('@/assets/user_02.png'),
          },
        ];
        let _groupList = [
          { text: '产品待办事项' },
          {
            text: '用户登录',
            groupId: 'group_01'
          },
          {
            text: '创建代码仓库',
            groupId: 'group_02'
          },
          {
            text: '未知项',
            groupId: 'group_03'
          }];
          let _statusList = [{
          stateStr: '未开始',
          state: '01',
          taskNumber: '3',
        },
        {
          stateStr: '设计开发',
          state: '02',
          taskNumber: '4',
        },
        {
          stateStr: '测试',
          state: '03',
          taskNumber: '5',
        },
        {
          stateStr: '发布',
          state: '04',
          taskNumber: '6',
        },
        {
          stateStr: '上线',
          state: '05',
          taskNumber: '3',
        },];

        this.cardListData.push(..._cardList);
        this.groupListData.push(..._groupList);
        this.statusListData.push(..._statusList);

  this.addBaseCard(this.cardListData, this.statusListData);


    },
    methods: {
      moveEnd(info){ // 移动卡片结束后
       console.log(' 移动卡片结束后 :::', info);
      },
      clicked(info){ // 点击卡片方法
        console.log(' 点击卡片方法 ::: ', info);
      },
      searchHandle(info){ // 查询方法
        console.log( '查询  ::: ', info);
      },
      addNewTask(info){
        console.log('  添加任务  :::', info);
      },
      addBaseCard(cards, status){
        let _cards = cards,
            _status = status;
            //taskState, state
        cards.forEach(function(cardItem, index){
          let noneState = [];

           _status.forEach(function(statusItem, index){
             if(cardItem.taskState == statusItem.state){
               console.log(' cards taskState  >>> ', cardItem.taskState);
             }else{
               console.log('none state >>>  ', statusItem.state)
               noneState.push(statusItem.state);
             }
           });
           
           console.log()


        });

      }
    },
    computed: {
      cardList: function () {
      let _cardList = this.cardListData;
     


        return _cardList;
      },
      groupList: function () {
      let _groupList = this.groupListData;

        return _groupList;
      },
      statusList: function () {
        let _statusList = this.statusListData;
        return _statusList;
      },
      searchParams: function(){
        return [{
          type: 'select',
          label: '需求名',
          params: 'name'
        },{
          type: 'input',
          label: '需求名称',
          params: 'name'
        },
        {
          type: 'select',
          label: '编号编号',
          params: 'number',
          options: [{value: '01', label: '一'},
          {value: '02', label: '二'}]
        },
        {
          type: 'input',
          label: '需求类型',
          params: 'types'
        },
        {
          type: 'input',
          label: '需求状态',
          params: 'status'
        },
        {
          type: 'input',
          label: '所属需求项',
          params: 'name'
        },
        {
          type: 'input',
          label: '优先级',
          params: 'first'
        }]
      },
    },


    components: {
      kanbanboard,
      kanbanSearch

    }
  }
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