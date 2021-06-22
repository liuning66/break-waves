<template>
    <div class="data-table" v-loading="loading">
        <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{ background: '#F5F7FA' }"
                @selection-change="handleSelectionChange"
        >
            <template v-for="col in columns">
                <el-table-column
                        :key="col.prop"
                        :prop="col.prop"
                        :label="col.label"
                        :width="col.width"
                        :formatter="col.formatter"
                        :sortable="col.sortable"
                        align="center"
                >
                    <template slot-scope="scope">
                        <slot :name="col.slot || 'defalut'" :rowData="scope">
                            {{scope.row[col.prop]}}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: "DataTable",
    props: {
      tableData: {
        type: Array,
        default: () => [],
      },
      columns: {
        type: Array,
        default: () => [],
      },
      loading: {
        type: Boolean,
        default: () => false,
      },
      pageObj: {
        type: Object,
        default: () => {
        },
      },
    },

    methods: {
      handleSelectionChange(val) {
        console.log(val, "val11");
        let arr = [];
        val.map((item) => {
          arr.push(item.gameId);
        });
        this.$emit("SelectionChange", arr);
      },
    },
  };
</script>
<style scoped lang="less">
    .data-table {
        margin-top: 10px;
        min-height: 520px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        ::v-deep.el-pagination.is-background .btn-next,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .el-pager li {
            background-color: #fff;
            border: 1px solid #c0c4cc;
        }

        ::v-deep.el-table::before {
            background-color: transparent !important;
        }

        ::v-deep.el-table--border::after,
        .el-table--group::after,
        .el-table::before {
            background-color: transparent !important;
        }

        ::v-deep.el-table--border::after,
        .el-table--group::after,
        .el-table::before {
            background-color: transparent !important;
        }

        ::v-deep .el-table td,
        ::v-deep .el-table th.is-leaf {
            border: none !important;
        }

        ::v-deep .el-table td {
            border-bottom: 1px solid #ebeef5 !important;
        }

        ::v-deep .el-table td,
        ::v-deep .el-table th {
            text-align: center;
        }

        .pagination {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>
