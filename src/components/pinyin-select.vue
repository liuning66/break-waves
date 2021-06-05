<template>
    <div id="pinyin-select">
        <el-select v-model="model" placeholder="placeholder" :filterable="true" clearable @clear="clearSelect"
                   :filter-method="filterMethod">
            <el-option
                    v-for="item in selectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
  import Pinyin from "@/assets/pinyin-util";
  import {CloneUtil} from "@/utils/clone-util";
  import {PinyinUtil} from "@/utils/pinyin-util";

  export default {
    name: "pinyin-select",
    props: {
      list: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      model(newVal) {
        this.selectList = CloneUtil.deep(this.list);
      }
    },
    data() {
      return {
        model: "",
        /** 原始数据 */
        selectList: CloneUtil.deep(this.list)
      }
    },
    created() {
      console.log(PinyinUtil.convertToInitials("中华人民共和国"));;
      console.log(this.selectList);
    },
    methods: {
      clearSelect() {
      },
      filterMethod(inputValue) {
        if (!inputValue) {
          this.selectList = CloneUtil.deep(this.list);
        }
        this.selectList = this.selectList.filter(item =>
          item.label.includes(inputValue)
          || this.getPinyin(item.label).includes(this.getPinyin(inputValue))
          || this.getInitials(item.label).includes(this.getInitials(inputValue))
        )
      },
      /**
       * 获取拼音
       * @param value
       * @returns {拼音}
       */
      getPinyin(value) {
        return Pinyin.ConvertPinyin(value);
      },

      /**
       * 获取拼音首字母
       * @param value
       * @returns {拼音首字母串数组}
       */
      getInitials(value) {
        return Pinyin.makePy(value)[0].toLowerCase();
      }
    }
  }
</script>

<style scoped lang="less">
    #pinyin-select {
        width: 100%;
        height: 100%;
    }
</style>
