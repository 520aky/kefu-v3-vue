<template>
  <div class="login">
    <div class="login-container">
      <div class="login-content">
        <div class="login-header" v-if="false">
          <img src="../assets/img/1b02c3189edd168b.jpg" alt="" />
        </div>
        <div class="form-container">
          <div class="form-group">
            <span class="form-toggle" :class="[curIndex == 0 ? 'active' : '']" @click="curIndex = 0">卡密登陆</span>
            <span class="form-toggle" :class="[curIndex == 1 ? 'active' : '']" @click="curIndex = 1">卡密续费</span>
          </div>
          <div class="form-group">
            <input type="text" placeholder="请输入登陆卡密" class="form-control" v-model="data.CardPass" />
          </div>
          <div class="form-group">
            <input type="text" placeholder="请输入续费卡密" class="form-control" v-if="curIndex == 1" v-model="data.Cardx" />
          </div>
          <div class="form-group">
            <button type="button" class="btn" @click="subMit">
              <span> {{ curIndex == 1 ? '续费' : '登陆' }} </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { layer } from 'vue3-layer'
import { login, renewal } from '@/api/login'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()


import { useRouter } from 'vue-router'
const router = useRouter()

const data = reactive({
  CardPass: '',
  Cardx: '',
})



const curIndex = ref(0)
const subMit = () => {
  if (curIndex.value == 0) {
    //登陆
    if (data.CardPass.length == 0) {
      return layer.msg('请输入登陆卡密')
    }
    let load = layer.load(0)
    try {
      login({ card: data.CardPass }).then((res) => {
        if (res.code != 0) {
          return layer.msg(res.msg)
        }
        appStore.setToken(res.result.token)
        router.push({ path: '/' })
      }).catch(err=>{
        return layer.msg(err.message)
      })
    } catch (error) {
      //return layer.msg(error.message)
      console.log('renewal error', error)
    } finally {
      layer.close(load)
    }
  } else if (curIndex.value == 1) {
    if (data.CardPass.length == 0) {
      return layer.msg('请输入登陆卡密')
    } else if (data.Cardx.length == 0) {
      return layer.msg('请输入续费卡密')
    } else {
      let load = layer.load(0)
      try {
        renewal({ card: data.CardPass, cardx: data.Cardx }).then((res) => {
          layer.msg(res.msg)
        })
      } catch (error) {
        console.log('login error', error)
      } finally {
        layer.close(load)
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  /* background-color: #87ceeb; */
  background-color: #c5d5cb;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login-container {
  width: 400px;
  margin: 0 auto;
  padding-top: 150px;
}
.login-content {
  background: #fff;
  border-radius: 2px;
  padding: 20px;
}
.login-header {
  background: #fff;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: -70px auto 0;
  padding: 3px;
  overflow: hidden;
}
.login-header img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.form-container {
  width: 100%;
}
.form-group {
  margin: 0 0 24px 0;
}
.form-container .form-toggle {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  display: inline-block;
  line-height: 50px;
  cursor: pointer;
  color: #444;
  width: 50%;
  text-align: center;
}
.form-container .form-toggle.active {
  /* color: #06f; */
  color: #06f;
  border-bottom: 3px solid #06f;
  font-weight: 700;
  font-size: 16px;
}
.form-control {
  height: 40px;
  font-size: 14px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 6px 12px;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0, 0, 0/8%);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-container .btn {
  padding: 9px 12px;
  font-size: 16px;
  background: #06f;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
</style>
