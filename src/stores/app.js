import { defineStore } from "pinia";
import {getItem, setItem, removeItem} from '@/utils/storage'
export const TOKEN = 'KF-TOKEN'


export const useAppStore = defineStore('app', {
    state: ()=>{
        return {
            title: '在线客服',
            token: getItem(TOKEN) || null
        }   
    },
    actions: {
        setToken(data){
            this.token = data
            setItem(TOKEN, data)
        },
        clearToken(){
            this.token = ''
            removeItem(TOKEN)
        }
    }
})