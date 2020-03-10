<template>
  <div>
    <article-header title="stoneの个人资料" description="哈哈哈哈哈" />
    <profile-card :card-info="cardInfo">
      <radar-chart :radar-indicator="NormalRadarInfo" :areaColor-color="['#B1C6AC','#85BD7D']" number-color="#1b2409" border-color="#72A66A" />
    </profile-card>
  </div>
</template>

<script>
import BasePage from '@/components/abstract/base-page.vue'
import { getStoneAge } from '@/utils/function'
export default {
  name: 'page-normal',
  extends: BasePage,
  computed: {
    cardInfo() {
      return [
        {
          label: '姓名',
          text: 'stone'
        },
        {
          label: '常用ID',
          text: 'stone、一颗石头'
        },
        {
          label: '性别',
          text: '男 <i class="fa fa-mars" style="color:#5b75ff;font-weight: bold;"></i>'
        },
        {
          label: '年龄',
          text: getStoneAge()
        },
        {
          label: '生日',
          text: '1995-1-6'
        },
        {
          label: '毕业院校',
          text: '井冈山大学'
        },
        {
          label: '现居地',
          text: this.Info['present_address']
        },
        {
          label: 'ＱＱ',
          text: '1484542698'
        },
        {
          label: '微信',
          text: 'hl1484542698'
        },
        {
          label: '职业',
          text: '程序员'
        },
        {
          label: '现状态',
          text: this.Info['now_state']
        }
      ]
    }
  }
}
</script>
