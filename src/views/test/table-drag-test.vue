<template>
    <div id="table-drag-test">
        <el-button type="primary" @click="startOrEndDrag">{{enableDrag ? '关闭拖拽' : '开启拖拽'}}</el-button>
        <el-table
                :data="tableData"
                ref="dragTable"
                style="width: 100%">
            <el-table-column
                    header-align="center"
                    align="center"
                    type="index"
            >
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import Sortable from "sortablejs";
  import {CloneUtil} from "@/utils/clone-util";

  /**
   * 表格拖拽测试
   *
   * @Autor ln
   * @Date 2021/4/20 21:04
   */
  export default {
    name: "table-drag-test",
    data() {
      return {
        enableDrag: false,
        sortable: null,
        tableData: [{date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'}, {
          date: '2016-05-04',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1517 弄'
        },
          {
            date: '2016-05-04',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎5',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎6',
            address: '上海市普陀区金沙江路 1517 弄'
          }]
      }
    },
    created() {
    },
    mounted() {
      this.drag();
    },
    methods: {
      startOrEndDrag() {
        this.enableDrag = !this.enableDrag;
        this.sortable.destroy();
        this.$nextTick(() => {
          this.drag();
        });
      },
      drag() {
        const dom = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
        this.sortable = Sortable.create(dom, {
          disabled: !this.enableDrag,
          ghostClass: 'sortable-ghost',
          onEnd: evt => {
            const newTableData = this.serializeArray(evt.oldIndex, evt.newIndex);
            console.log(newTableData);
          }
        });
      },
      serializeArray(originIndex, newIndex) {
        const originData = CloneUtil.deep(this.tableData);
        const deleteItem = originData.splice(originIndex, 1);
        originData.splice(newIndex, 0, ...deleteItem);
        return originData;
      }
    }
  }
</script>

<style scoped lang="less">
    #table-drag-test {
        width: 100%;
        height: 100%;
    }
</style>
