<template>
  <div id="app">
    <div class="cards-wrapper">
      <div class="cards" v-for="(item, index) in cards" :key="index">
        {{item.userId}}
      </div>
    </div>


  </div>
</template>

<script>
  import KanbanItme from '@/components/kanbanboard/kanban-item.vue';
  export default {
    data() {
      return {
        groupList: [
          {
            groupId: 1,
            groupText: '组1'
          },
          {
            groupId: 2,
            groupText: '组2'
          },
          {
            groupId: 3,
            groupText: '组3'
          },

        ],
        statusList: [
          {
            statusId: 1,
            status: 1,
            statusText: '状态1'
          },
          {
            statusId: 2,
            status: 2,
            statusText: '状态2'
          },
          {
            statusId: 3,
            status: 3,
            statusText: '状态3'
          },
          {
            statusId: 4,
            status: 4,
            statusText: '状态4'
          },

        ],
        cards: []
      }
    },
    mounted() {
      this.buildGrid()
    },
    methods: {
      buildGrid() {
        let groupId = this.groupList;
        let status = this.statusList;
        let cards = [];
        groupId.forEach((groupIdItem, index) => {
          status.forEach((statusItem, index) => {
            cards.push({
              userId: groupIdItem.groupId + '__' + statusItem.status,
              groupId: groupIdItem.groupId,
              status: statusItem.status
            })
          })
        });
        this.cards.push(...cards);
        console.log('cards   >>>>  ', cards)

      }
    },
    components: {
      KanbanItme
    }
  }
</script>

<style scoped>
.cards-wrapper{
  clear: both;
}
.cards{
  float: left;
  margin-right: 5px;
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
}
</style>