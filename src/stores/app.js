import { defineStore } from "pinia";
import {getItem, setItem, removeItem} from '@/utils/storage'
export const TOKEN = 'KF-TOKEN'
export const FACEURL= 'FACE-URL'
export const TITLE = 'KF-TITLE'


export const useAppStore = defineStore('app', {
    state: ()=>{
        return {
            title: '在线客服',
            token: getItem(TOKEN) || null,
            faceUrl: getItem(FACEURL) || ''
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
        },
        setFaceUrl(data){
            this.faceUrl = data
            setItem(FACEURL, data)
        },
        clearFaceUrl(){
            this.faceUrl = ''
            removeItem(FACEURL)
        },
        setTitle(data){
            this.title = data
            setItem(TITLE, data)
        }
    }
})