import { defineStore } from "pinia";


export const useUserStore = defineStore('user',{
    state: ()=> ({
        userinfo: null
    }),
    actions: {
        clearUserinfo(){
            this.userinfo = null
        },
        // 获取用户信息
        async getUserinfo(){
            
        }
    }
})