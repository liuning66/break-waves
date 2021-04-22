<template>
    <div id="test">
        <el-button type="primary">点击出现模态框</el-button>
        <el-dialog
                title="提示"
                v-drag
                :append-to-body="true"
                :close-on-click-modal="false"
                :close-on-press-escape="false"
                :visible.sync="dialogVisible"
                width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
  /**
   * 测试文件
   *
   * @autor ln
   * @date 2021/4/20
   */

  export default {
    name: "test",
    data() {
      return {
        dialogVisible: false
      }
    },
    created() {
      this.momentTest()
    },
    methods: {
      momentTest() {
        // console.log(moment(new Date()).add(-7, "d").format("yyyy-MM-DD HH:mm:ss"))
      }
    },
  }
</script>
<style scoped>



</style>
