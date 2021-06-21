<template>
  <div id="echarts-line">
    <el-button type="primary" @click="setEchartsOptions" style="margin-bottom:20px">加载图</el-button>
    <el-table
        v-show="!showEcharts"
        :data="[{ date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }, { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' }]"
        style="width: 100%">
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
    <div id="broken-line" v-show="showEcharts"></div>
  </div>
</template>

<script>
/**
 * 折线图
 *
 * @Date 2021/6/2 16:14
 */
import * as echarts from "echarts";
import ResizeObserver from "resize-observer-polyfill";

export default {
  name: "echarts-line",
  data() {
    return {
      echartsInstance: null,
      curNow: +new Date(1997, 9, 3),
      someDay: 24 * 3600 * 1000,
      curValue: Math.random() * 1000,
      showEcharts: false
    }
  },
  mounted() {
    this.initChart();
    this.setEchartsOptions();
    this.setDomObserver();
  },
  methods: {
    setDomObserver() {
      const ro = new ResizeObserver((entries, observer) => {
        console.log("entries", entries);
        console.log("observer", observer);
      })
      const dom = document.getElementById("broken-line");
      ro.observe(document.body);
    },
    initChart() {
      const dom = document.getElementById("broken-line");
      this.echartsInstance = echarts.init(dom);
      this.echartsInstance.on("click", params => {
        console.log(params);
      })
      // this.echartsInstance.getZr().on("click", params => {
      //   console.log(params);
      // })
    },
    randomData() {
      this.curNow = +this.curNow + this.someDay;
      const now = new Date(this.curNow);
      const value = this.curValue + Math.random() * 21 - Math.random() * 200;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    },
    getRandomData() {
      const data = [];
      for (let i = 0; i < 200; i++) {
        data.push(this.randomData());
      }
      return data;
    },
    getFormatData(data) {
      for (let key of Object.keys(data)) {
        data[key] = data[key].map(value => ({
          value,
          originValue: value,
        }))
      }
      return [data.max, data.min, data.value];
    },
    setEchartsOptions() {
      this.curValue = Math.random() * 1000;
      const data = {
        max: [1320, 1132, 601, 820, 900, 900, 1500, 820, 900, 900, 1080, 2000, 960, 620, 900, 650, 900],
        min: [200, 350, 180, 200, 260, 320, 400, 650, 300, 500, 490, 660, 320, 320, 325, 526, 700],
        value: [350, 600, 0, 500, 490, 660, 320, 260, 320, 400, 900, 900, 1500, 490, 325, 550, 720]
      };
      let [max, min, value] = this.getFormatData(data);
      max = max.map((value, index) => {
        return {
          value: value.value - min[index].value,
          originValue: value.value
        };
      })
      const options = {
        title: {
          text: 'abcdefg',
        },
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            console.log(params);
            let str = '';
            params.forEach(item => {
              str += `
                <div>
                <div style="display:inline-block;width:12px;height: 12px; margin-right:5px;border-radius:50%;background-color: ${item.color}"></div>
                <span style="display:inline-block;width: 50px">${item.seriesName}</span>
                <span>${item["data"].originValue}</span>
                </div>
                `
            })
            return str;
          }
        },
        legend: {
          data: ['实际值']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          inverse: false,
          data: ['13:05', '13:15', '13:21', '13:35', '13:45', '13:55', '14:05', '14:06', '14:55', '15:05', '16:05', '17:05', '18:05', '20:05', '21:05', '22:05', '23:59']
        },
        yAxis: {
          axisLine: {
            show: true
          },
          type: 'value'
        },
        dataZoom: [{
          type: 'slider',
          dataBackground: {
            lineStyle: {
              color: 'red',
              shadowColor: '#000',
              shadowOffsetY: 2,
              shadowOffsetX: 1,
              shadowBlur: 50
            },
            areaStyle: {
              color: "rgba(255,0,0,.5)",
              shadowColor: "#000",
              shadowOffsetY: -2,
              shadowOffsetX: 1,
              shadowBlur: 10
            }
          }
        }],
        series: [{
          name: "最小值",
          type: 'line',
          smooth: true,
          lineStyle: {
            opacity: 0,
            // color: "transparent"
          },
          data: min,
          showSymbol: false,
          stack: "stackLine"
        },
          {
            name: "最大值",
            type: 'line',
            smooth: true,
            lineStyle: {
              opacity: 0,
              // color: "transparent"
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: 'rgba(64,161,187,.2)', // 0% 处的颜色
                }, {
                  offset: 0.32, color: 'rgba(64,161,187,.1)' // 0% 处的颜色
                }, {
                  offset: 0.32, color: 'rgba(190,163,51,.2)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(190,163,51,.2)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            data: max,
            stack: "stackLine",
            showSymbol: false
          },
          {
            name: '实际值',
            type: 'line',
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#40a1bb' // 0% 处的颜色
                }, {
                  offset: 0.32, color: '#40a1bb' // 0% 处的颜色
                }, {
                  offset: 0.32, color: '#c4ad3a' // 0% 处的颜色
                }, {
                  offset: 1, color: '#c4ad3a' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true,
            customProp: "123123",
            showSymbol: false,
            markPoint: {
              symbol: "circle",
              symbolSize: 15,
              data: [
                {
                  name: '最大值',
                  coord: ['周五', 490],
                  label: {
                    show: false
                  }
                },
              ],
              itemStyle: {
                color: "#8bc8fd"
              }
            },
            data: value
          }]
      };
      this.echartsInstance.setOption(options);
    },
    showTable() {
      this.showEcharts = !this.showEcharts;
    }
  }
}
</script>

<style scoped lang="scss">
#echarts-line {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#broken-line {
  width: 1500px;
  height: 600px;
  border: 1px solid #000;

}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

::v-deep .el-table th {
  background-color: #000 !important;
}
</style>