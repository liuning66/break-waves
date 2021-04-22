<template>
    <div id="router-test">
        123123123{{status}}
    </div>
</template>

<script>
  /**
   *
   *
   * @Autor ln
   * @Date 2021/4/21 17:00
   */
  export default {
    name: "router-test",
    data() {
      return {
        status: ""
      }
    },
    watch:{
      $route() {
        this.status = this.$route.params.id;
      }
    },
    created() {
      console.log('路由', this.$route);
      this.status = this.$route.params.id;
    },
    methods: {}
  }
</script>

<style scoped lang="less">
    #router-test {
        width: 100%;
        height: 100%;
    }
</style>
