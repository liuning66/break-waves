<template>
  <div class="home">
    <test style="margin-bottom: 20px;"/>
    <table-drag-test v-if="false"/>
    <custom-scroll-bar-test v-if="false"/>
    <el-button type="primary" @click="toPath('a')">去A</el-button>
    <el-button type="primary" @click="toPath('b')">去B</el-button>
    <pinyin-select :list="selectList"/>
    <router-view/>
  </div>
</template>

<script>
  import Test from "./test/test";
  import TableDragTest from "@/views/test/table-drag-test";
  import CustomScrollBarTest from "@/views/test/custom-scroll-bar-test";
  import PinyinSelect from "@/components/pinyin-select";

  export default {
    name: 'Home',
    components: {PinyinSelect, CustomScrollBarTest, TableDragTest, Test},
    data() {
      return {
        selectList: [
          {label: "123", value: "1"},
          {label: "张三", value: "2"},
          {label: "里斯", value: "3"},
          {label: "王五", value: "4"},
          {label: "李唐", value: "5"},
          {label: "胖大海", value: "6"},
        ]
      }
    },
    created() {

    },
    mounted() {
    },
    methods: {
      toPath(path) {
        this.$router.push(`/test/${path}?router=123123`)
      }
    }
  }
</script>
