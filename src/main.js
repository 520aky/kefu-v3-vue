import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

// 引入layer
import 'vue3-layer/dist/s3Layer.css'

// 权限控制
import './permission'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局引入 viewer
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueViewer)


app.mount('#app')
