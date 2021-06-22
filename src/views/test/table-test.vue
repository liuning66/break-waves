<template>
    <div id="table-test">
                  
        <DataTable
                   :table-data="pagination.tableData"
                :columns="pagination.tableColums"
                          >
                        <!-- <el-table-column
              width="100"
              label="活动图片"
              align="center"
            > -->
            <template #img="scope">
                           <img
                                      :src="scope.rowData.row.enterpriseLogo"
                                      alt="暂无图片"
                                      class="active-img"
                                    />    
            </template>

        </DataTable>
    </div>
</template>

<script>
  import DataTable from "@/components/DataTable";
  import {activeManagementTableColums} from "./index.js"

  /**
   *
   *
   * @Autor ln
   * @Date 2021/6/5 15:58
   */
  export default {
    name: "table-test",
    components: {DataTable},
    data() {
      return {
        pagination: {
          tableData: [],
          tableColums: activeManagementTableColums
        }
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.pagination.tableData = [{
          "endTime": "2099-12-31 12:59:59",
          "enterpriseLogo": "https://50.test.betawm.com/Beta.FileService/f/test_14b5e991425a4412b929590d32aefb68.jpg",
          "gameCreator": "您",
          "gameId": 2110,
          "gameIsPermanent": 2,
          "gameStatusDesc": "未上架",
          "gameTemplateCode": "cfrs",
          "gameTemplateId": 1,
          "gameTemplateName": "财富人生",
          "gameTemplateType": 0,
          "gameTimes": "2021.06.04 16:27:00-2099.12.31 12:59:59",
          "gameTypeDesc": "投教游戏",
          "shareUrl": "https://actqa.test.betawm.com/Beta.ActivityH5/CFRS?actParams=eyJiaWQiOiIxIiwiYUNvZGUiOiJjZnJzOTIxMTAwMDAyMTEwIiwic2tpbiI6InJlZCIsInRlc3QiOiIxIn0=",
          "startTime": "2021-06-04 16:27:00",
          "status": 1,
          "title": "1111"
        }, {
          "endTime": "2099-12-31 12:59:59",
          "enterpriseLogo": "https://50.test.betawm.com/Beta.FileService/f/test_14b5e991425a4412b929590d32aefb68.jpg",
          "gameCreator": "您",
          "gameId": 2111,
          "gameIsPermanent": 2,
          "gameStatusDesc": "未上架",
          "gameTemplateCode": "cfrs",
          "gameTemplateId": 1,
          "gameTemplateName": "财富人生",
          "gameTemplateType": 0,
          "gameTimes": "2021.06.05 13:18:13-2099.12.31 12:59:59",
          "gameTypeDesc": "投教游戏",
          "shareUrl": "https://actqa.test.betawm.com/Beta.ActivityH5/CFRS?actParams=eyJiaWQiOiIxIiwiYUNvZGUiOiJjZnJzNjk2OTAwMDAyMTExIiwic2tpbiI6InJlZCIsInRlc3QiOiIxIn0=",
          "startTime": "2021-06-05 13:18:13",
          "status": 1,
          "title": "13213"
        }]
      },
      showData(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped lang="less">
    #table-test {
        width: 100%;
        height: 100%;
    }
</style>
