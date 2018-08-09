import Vue from 'vue'
import App from './index'
const mpvueTrace = require('mpvue-lint/mpvue-trace')
mpvueTrace.trace(Vue)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'enablePullDownRefresh': false,
    'disableScroll': true,
    'usingComponents': {
      'loading': '/static/components/loading/index',
      'message-item': '/static/components/messageItem/index',
      'bot-say-receiving': '/static/components/botSay/receiving/index',
      'user-say-message': '/static/components/userSay/message/index'
    }
  }
}
