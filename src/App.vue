<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import {AppUtil} from "./utils/app-util";

  export default {
    name: 'app',
    components: {},
    created() {
      AppUtil.init(this.$bus)
    }
  }
</script>

<style>
</style>
