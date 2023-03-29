import { useAppStore } from './stores/app.js'
import { TOKEN } from '@/stores/app'
import router from '@/router'
import { nextTick } from 'vue'
import { ElLoading } from 'element-plus'

const getPageTitle = (title) => {
  const { title: appTitle } = useAppStore()
  if (title) {
    return `${title} - ${appTitle}`
  }
  return appTitle
}

const WhiteList = ['Login']
let loadingInstance = null
router.beforeEach(async (to) => {
  loadingInstance = ElLoading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.7)',
  })
  if (WhiteList.includes(to.name)) {
    return true
  }
  if (!window.localStorage[TOKEN]) {
    return {
      name: 'Login',
      query: {
        redirect: to.fullPath,
      },
      replace: true,
    }
  } else {
  }

  return true
})

router.afterEach((to) => {
  loadingInstance.close()
  if (router.currentRoute.value.name == to.name) {
    nextTick(() => {
      document.title = getPageTitle(to.meta.title)
    })
  }
})
