<template>
  <Layout>
    <!-- <kanbanHeader></kanbanHeader> -->
    <content>
      <p
        span="4"
        v-if="groupList.length > 0"
        class="left_border"
      ></p>
      <div class="row-wrapper">
        <Row
          :gutter="16"
          type="flex"
          justify="start"
          align="middle"
        >
          <Col
            span="4"
            v-if="groupList.length > 0"
          >
          <div class="leftHeader">
            {{groupList[0].text}}
          </div>
          </Col>
          <Col
            span="4"
            v-for="(item, index) in statusList"
            :key="index"
          >
          <kanbanContentHeader
            :text="item.stateStr"
            :state="item.state"
            :taskNumber="item.taskNumber"
          ></kanbanContentHeader>
          </Col>

        </Row>
      </div>
      <div
        class="row-wrapper"
        v-for="(itemGroup, index) in groupLists"
        v-if="groupList.length > 0"
      >
        <Row
          :gutter="16"
          type="flex"
          justify="start"
          align="middle"
        >
          <Col
            span="4"
            v-if="groupLists.length > 0"
          >
          <div class="leftHeader">
            {{itemGroup.text}}
          </div>
          </Col>
          <Col
            span="4"
            v-for="(items, index) in statusList"
            :key="index"
          >
          <div
            :id="itemGroup.groupId + '_' + items.state"
            :state="items.state"
            :groupid="itemGroup.groupId"
            :style="{'min-height': '100px'}"
          >
            <kanbanItem
              :key="keys"
              :item="value"
              v-for="(value, keys) in cardList"
              v-if="itemGroup.groupId == value.groupId && value.taskState == items.state"
            >
            </kanbanItem>
          </div>
          <!--有分组-->
          </Col>
        </Row>
      </div>
      <div
        class="row-wrapper"
        v-if="groupList.length == 0"
      >

        <Row
          :gutter="16"
          type="flex"
          justify="start"
          align="middle"
        >
          <Col
            span="4"
            v-for="(items, index) in statusList"
            :key="index"
          >
          <div
            :id="'stateId_' + items.state"
            :state="items.state"
            :style="{'min-height': '100px'}"
          >
            <kanbanItem
              :key="keys"
              :item="value"
              :Group=false
              v-for="(value, keys) in cardList"
              v-if=" value.taskState == items.state"
            >
            </kanbanItem>
          </div>
          <!--无分组-->
          </Col>
        </Row>
      </div>


    </content>

  </Layout>

</template>

<script>

  import kanbanHeader from "./kanban-header";
  import kanbanContentHeader from './kanbancontent-header';

  import kanbanItem from './kanban-item';

  import { EventBus } from '@/tools';

  import Sortable from 'sortablejs';

  export default {
    props: {

      cardList: {
        type: Array,
        default: function () {
          return []
        }
      },
      groupList: {
        type: Array,
        default: function () {
          return []
        }
      },
      statusList: {
        type: Array,
        default: function () {
          return []
        }
      },

    },
    data() {
      return {
        Group: false,
        sortId: []
      };
    },
    mounted() {
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      };

      this.sortId.push(...this.getSortId());
      console.log(this.sortId)
      this.sortId.forEach((sortIdItem, index) => {
        this.bindSortable(sortIdItem);
      })
    },
    methods: {
      getSortId() {
        let _sortId = [];
        if (this.groupLists.length > 0) {
          this.groupLists.forEach((groupIdItem, index) => {
            this.statusList.forEach((statusItem, index) => {
              _sortId.push(groupIdItem.groupId + '_' + statusItem.state);
            })
          });
        } else {
          this.statusList.forEach((statusItem, index) => {
            _sortId.push('stateId' + '_' + statusItem.state);
          })
        }

        return _sortId;
      },

      bindSortable(moveId, groupId) {
        let vm = this;
        let todoList = document.getElementById(moveId);
        Sortable.create(todoList, {
          group: {
            name: 'list',
            pull: true
          },
          animation: 120,
          ghostClass: 'placeholder-style',
          fallbackClass: 'iview-admin-cloned-item',
          onMove: function (evt, originalEvent) {

            if (vm.Group) { // 分组时移动
              if (evt.from.getAttribute('groupid') == evt.to.getAttribute('groupid')) {
                return;
              } else {
                return false;
              }
            } else {
              if (evt.from.getAttribute('groupid') !== evt.to.getAttribute('groupid')) {
                return;
              } else {
                return;
              }
            }

          },
          onEnd: function (evt) {

            EventBus.$emit('moveEnd', { evt });
          }
        });

      }
    },

    computed: {

      groupLists() {

        return this.groupList.slice(1, this.groupList.length);
      },

    },
    components: {
      kanbanHeader,

      kanbanContentHeader,
      kanbanItem
    }
  };
</script>

<style scoped>
  .ivu-layout-header {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .row-wrapper {
    margin-top: 10px;
    border-bottom: 4px solid #ccc;
    padding-bottom: 10px;
  }

  .left_border {
    position: absolute;
    left: 15%;
    border-right: 4px solid #ccc;
    height: 100%;

  }

  .leftHeader {
    width: 100px;
    background: #33cccc;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-weight: 600;
    margin: auto;
    height: 32px;
    line-height: 32px;
  }


  .iview-admin-draggable-list {
    height: 100%;
  }

  .iview-admin-draggable-list li {
    padding: 9px;
    border: 1px solid #e7ebee;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
    transition: all .2s;
  }

  .iview-admin-draggable-list li:hover {
    color: #87b4ee;
    border-color: #87b4ee;
    transition: all .2s;
  }

  .iview-admin-draggable-delete {
    height: 100%;
    position: absolute;
    right: -8px;
    top: 0px;
    display: none;
  }

  .iview-admin-draggable-list li:hover .iview-admin-draggable-delete {
    display: block;
  }

  .placeholder-style {
    display: block !important;
    color: transparent;
    border-style: dashed !important;
  }

  .delte-item-animation {
    opacity: 0;
    transition: all .2s;
  }

  .iview-admin-draggable-list {
    overflow: auto
  }
</style>