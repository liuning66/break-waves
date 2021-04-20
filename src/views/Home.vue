<template>
  <div class="home">
    <test style="margin-bottom: 20px;"/>
    <table-drag-test/>
  </div>
</template>

<script>
  import Test from "./test/test";
  import TableDragTest from "@/views/test/table-drag-test";

  export default {
    name: 'Home',
    components: {TableDragTest, Test},
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
