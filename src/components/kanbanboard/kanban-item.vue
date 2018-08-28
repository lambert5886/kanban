<template>
  <div>


    <div
      :id="item.userId"
      @click="itemClick(item)"
      class="card-wrapper"
      :groupId="item.groupId"
      :state="item.taskState"
    >
      <div class="card-wrap">
        <Card :style="item.bgColor">
          <div class="circle-wrapper">
            <p class="circle">
              <Icon
                type="record"
                :size="12"
              ></Icon>
            </p>
            <span class="taskId">{{item.taskId}}</span>
          </div>

          <p class="item-content">{{item.description}}, {{item.userId}}</p>
          <p class="item-name">
            <span class="user_name">
              {{item.userName}}
            </span>
            <img :src="item.headPortrait" />

          </p>

        </Card>
      </div>

    </div>

  </div>
</template>

<script>
  import { EventBus } from '@/tools';

  import Sortable from 'sortablejs';

  export default {
    props: {
      item: {
        type: Object,
        default: function () {
          return {}
        }
      },

      Group: {
        type: Boolean,

      },

    },
    mounted() {

    },
    methods: {
      itemClick(info) {

        EventBus.$emit('clickItem', info);
      },

    },

  }
</script>

<style scoped>
  .card-wrapper {

    min-height: 10px;

  }

  .card-wrap {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .kanban-item {
    width: 100px;
    height: auto;
  }

  .circle-wrapper {
    text-align: left;
  }

  .ivu-card:hover {
    box-shadow: 0px 0px 0px;
  }

  .circle {
    width: 16px;
    height: 16px;
    text-align: center;
    border-radius: 18px;
    position: relative;
    line-height: 15px;
    border: 1px solid;
    display: inline-block;
  }

  .item-content {
    text-align: center;
  }

  .item-name {
    text-align: right;
  }

  span.user_name {
    position: relative;
    top: -5px;
  }

  span.taskId {
    display: inline;
  }
</style>