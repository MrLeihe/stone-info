<template>
  <div>
    <article-header title="个人简历" :description="headerDescription" />
    <profile-card :card-info="cardInfo">
      <radar-chart :radar-indicator="JobRadarInfo"></radar-chart>
    </profile-card>
  </div>
</template>

<script>
import BasePage from '@/components/abstract/base-page.vue'
import { formatDate, getStoneAge } from '@/utils/function'
export default {
  name: 'page-job',
  extends: BasePage,
  computed: {
    headerDescription() {
      return [
        {
          label: '下载',
          text: `
                    <a href="/static/resource/resume/pea3nut-web-resume.pdf" target="_blank">正常版</a>
                    /
                    <a href="/static/resource/resume/pea3nut-web-image-resume.png" target="_blank">单页图片版</a>
                `
        },
        {
          label: '最后更新',
          text: formatDate(this.LastUpdateTime)
        }
      ]
    },
    cardInfo() {
      return [
        {
          label: '姓名',
          text: '贺磊'
        },
        {
          label: '性别',
          text: `男`
        },
        {
          label: '年龄',
          text: getStoneAge()
        },
        {
          label: '户口',
          text: '江西省 吉安市',
          print: false
        },
        {
          label: '毕业院校',
          text: '井冈山大学（2012-2016）'
        },
        {
          label: '所学专业',
          text: '计算机-网络工程（学士）'
        },
        {
          label: '婚姻状况',
          text: this.Info['marriage'],
          print: false
        },
        {
          label: '政治面貌',
          text: '共青团员',
          print: false
        },
        {
          label: '微信',
          text: 'hl1484542698'
        },
        {
          label: 'E-mail',
          text: '18617169508@163.com'
        },
        {
          label: '希望地区',
          text: '互联网一二线城市',
          print: false
        },
        {
          label: '现状态',
          text: this.Info['now_state_job'],
          print: false
        }
      ]
    }
  }
}
</script>
