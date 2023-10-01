import { createApp } from 'vue'





import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/css/style.css'
import './assets/css/css.css'
import './assets/css/Swiper.css'
import './assets/css/iconfont.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-theme.min.css'
import './assets/css/animate.min.css'



// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 引入layer
import 'vue3-layer/dist/s3Layer.css'

// 权限控制
import './permission'




// 全局引入 viewer
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'




import pinia from './stores'


const app = createApp(App)

// 引入element icon
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
//   }


app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(VueViewer)





app.mount('#app')
