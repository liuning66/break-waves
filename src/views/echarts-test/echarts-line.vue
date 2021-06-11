<template>
  <div id="echarts-line">
    <el-button type="primary" @click="setEchartsOptions" style="margin-bottom:20px">加载图</el-button>
    <div id="broken-line"></div>
  </div>
</template>

<script>
/**
 * 折线图
 *
 * @Date 2021/6/2 16:14
 */
import * as echarts from "echarts";

export default {
  name: "echarts-line",
  data() {
    return {
      echartsInstance: null,
      curNow: +new Date(1997, 9, 3),
      someDay: 24 * 3600 * 1000,
      curValue: Math.random() * 1000
    }
  },
  mounted() {
    this.initChart();
    this.setEchartsOptions();
  },
  methods: {
    initChart() {
      const dom = document.getElementById("broken-line");
      this.echartsInstance = echarts.init(dom);
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
    setEchartsOptions() {
      this.curValue = Math.random() * 1000;
      const data = {
        max: [1320, 1132, 601, 820, 900, 900, 1500],
        min: [200, 350, 180, 200, 260, 320, 400],
        value: [350, 600, 0, 500, 490, 660, 320]
      };

      data.max = data.max.map((value, index) => {
        return value - data.min[index];
      })
      const options = {
        title: {
          text: '某楼盘销售情况',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          itemStyle: {
            color: []
          }
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['stack', 'tiled']},
            saveAsImage: {show: true}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          inverse: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          axisLine: {
            show: true
          },
          type: 'value'
        },
        dataZoom: [{
          startValue: '周一'
        }, {
          type: 'inside'
        }],
        series: [{
          type: 'line',
          smooth: true,
          lineStyle: {
            opacity: 0,
            // color: "transparent"
          },
          data: data.min,
          showSymbol: false,
          stack: "stackLine"
        },
          {
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
            data: data.max,
            stack: "stackLine",
            showSymbol: false
          },
          {
            name: '预购',
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
            data: data.value
          }]
      };
      this.echartsInstance.setOption(options);
    }
  }
}
</script>

<style scoped lang="less">
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

</style>