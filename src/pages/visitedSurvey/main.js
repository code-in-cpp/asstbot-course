import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '我聊过的...',
    'usingComponents': {
      'slider-left': '../../../static/native/slider-left/index'
    },
    'enablePullDownRefresh': false,
    'disableScroll': true
  }
}
