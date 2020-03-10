<template>
  <div>
    <div :class="rootClass"></div>
  </div>
</template>

<script>
import Echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
export default {
  name: 'radar-chart',
  props: {
    radarIndicator: {
      type: Array,
      default: () => {
        return []
      }
    },
    textColor: {
      type: String,
      default: '#7F7F7F'
    },
    numberColor: {
      type: String,
      default: '#02304e'
    },
    borderColor: {
      type: String,
      default: '#91AECD'
    },
    pointColor: {
      type: String,
      default: '#3E3E3E'
    },
    areaColor: {
      type: Array,
      default: () => {
        return ['#B1C6AC', '#85BD7D']
      }
    }
  },
  data() {
    return {
      rootClass: `${this.$options.name}--echarts`
    }
  },
  mounted() {
    const { indicator, seriesValues } = this.getIndicatorAndSeriesValues()

    this.$nextTick(() => {
      const myChart = Echarts.init(this.$el.querySelector(`.${this.rootClass}`))
      myChart.setOption({
        radar: {
          indicator,
          radius: 120,
          name: {
            textStyle: {
              color: this.textColor
            }
          }
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: seriesValues,
                label: {
                  show: true,
                  formatter: function(params) {
                    return params.value
                  },
                  textStyle: {
                    color: this.numberColor
                  }
                },
                lineStyle: {
                  color: this.borderColor
                },
                itemStyle: {
                  color: this.pointColor
                },
                areaStyle: {
                  opacity: 0.85,
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: this.areaColor[0] // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: this.areaColor[1] // 100% 处的颜色
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      })
    })
  },
  methods: {
    getIndicatorAndSeriesValues() {
      const indicator = [],
        seriesValues = []

      this.radarIndicator.forEach(({ label, value, max }) => {
        indicator.push({
          name: label,
          max
        })
        seriesValues.push(value)
      })

      return {
        indicator,
        seriesValues
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.radar-chart {
  min-height: 320px;
  min-width: 320px;
  overflow: hidden;

  &--echarts {
    width: 100%;
    height: 320px;
  }
}
</style>
