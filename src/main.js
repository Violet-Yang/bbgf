// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import top from './components/child/Top_div'
import level from './components/child/Level_div'
import axios from 'axios' // Axios 임포트

Vue.component('topBox', top)
Vue.component('levelBox', level)
Vue.config.productionTip = false

// 전역 configuration 설정
//Base URL을 설정한다.
axios.defaults.baseURL = 'https://api.bbgfarm.shop'
// 모든 요청에 추가할 헤더 예를 들어 서비스키 설정
axios.defaults.headers.common['Service-Key'] = 'AIzaSyAbL04smbk07VACmID0BqWdwYsEiwFGappp'

// // Request Interceptor(보내기전에 가로챈다, 가로채서 무언가를 여기서 처리한 후에 실행시킨다.)
// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request Interceptor', config)
//   // 헤더를 변경하려면 headers 오브젝트를 변경한다
//   config.headers.Authorization = 'something others'
//   // 임의의 헤더를 새로 설정할 수 있다
//   config.headers['SOMETHING'] = 'some value'
//   return config
// })
//
// // Response Interceptor(응답받기전에 가로챈다. 예를들어서 가로챈후에 500에러나 400에러 401에러 ..... 채크해서 500에러면 에러페이지로 이동시켜라)
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res)
//   return res
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
