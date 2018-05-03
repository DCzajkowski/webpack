import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = true

{{#router}}
import router from './router'
{{/router}}

import App from './App'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    components: { App },
    template: '<App/>',
    {{/if_eq}}
})
