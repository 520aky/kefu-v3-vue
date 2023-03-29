import { Decrypt, Encrypt } from './encrypt'
import { useAppStore } from '../stores/app'
export default class SocketService {
    static instance = null
    static get Instance() {
        if (!this.instance) {
            this.instance = new SocketService()
        }
        return this.instance
    }

    // 服务端连接的socket对象
    ws = null
    //登陆请求数据
    heartbeatTimer = null
    // 存储回调的函数
    callBackMapping = {}
    // 标识是否连接成功
    connected = false

    connect(url) {
        return new Promise((resolve, reject) => {
            try {
                // if (!window.WebSocket) {
                //     return console.log('您的浏览器不支持Websocket')
                // }
                if(this.connected){
                    reject('already connected')
                }
                this.ws = new WebSocket(url)
                this.ws.binaryType = 'arraybuffer'
                this.ws.onopen = () => {
                    this.connected = true

                    if (this.heartbeatTimer != null) {
                        clearInterval(this.heartbeatTimer)
                        this.heartbeatTimer = null
                    }

                    this.heartbeatTimer = setInterval(() => {
                        this.ws.send('ping')
                    }, 60 * 1000)

                    resolve('success')
                }

                this.ws.onclose = (e) => {
                    if (this.heartbeatTimer != null) {
                        clearInterval(this.heartbeatTimer)
                        this.heartbeatTimer = null
                    }
                    this.connected = false
                    this.instance = null
                    reject(e)
                }
                this.ws.onmessage = (msg) => {
                    var data = msg.data
                    if (!data || !this.callBackMapping) {
                        return
                    }
                    if (data == 'pong') {
                        return
                    }
                    try {
                        let body = JSON.parse(data)
                        let t = body['type']
                        let result = ''
                        if (body['result'] != '' && typeof body['result'] != 'undefined') {
                            try {
                                result = Decrypt(body['result'], useAppStore().token)
                            } catch (err) {
                                console.log('解密失败', body['result'])
                            }
                        }
                        if (this.callBackMapping[t]) {
                            this.callBackMapping[t](result)
                        }
                    } catch (error) {
                        console.log('websocket onmessage error', error)
                    }
                }
            } catch (error) {
                reject(error)
            }
        })
    }
    registerCallBack(stype, callback) {
        this.callBackMapping[stype] = callback
    }

    unRegisterCallBack(stype) {
        this.callBackMapping[stype] = null
    }
    close() {
        if (this.ws) {
            this.ws.close()
        }
    }
    send(data) {
        if (this.connected) {
            try {
                this.ws.send(data)
            } catch (error) {
                this.ws.send(data)
            }
        }
    }
    send_object(data) {
        if (this.isConnected && this.socket && data) {
            var str = JSON.stringify(data)
            if (str) {
                this.socket.send(str)
            }
        }
    }
}
