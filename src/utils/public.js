
/**
 * 获取图片路径
 * @param {img/xxxx.png} name
 * @returns
 */
export function getImageUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export function getMsgType(msg) {
    // console.log(msg, typeof msg)

    let msgType = 'text'
    // return 'text'
    if (typeof msg == 'undefined' || typeof msg == 'null' || msg == '' || msg == 'undefined') {
        return 'text'
    }
    if (msg.indexOf('[pic=') == 0) {
        msgType = '图片'
    } else if (msg.indexOf('[face=') != -1) {
        msgType = '表情'
    } else if (msg.indexOf('[file=') == 0) {
        msgType = '文件'
    } else if (msg.indexOf('[Voi=') == 0) {
        msgType = '语音'
    }
    return msgType
}

/**
 * 格式化msg信息
 * @param {*} msg
 */
export function convertChatMsg(msg, faceUrl = '') {
    let msgType = 'text'
    if (typeof msg == 'undefined' || typeof msg == 'null' || msg.length == 0 || !msg) {
        msgType = 'text'
    }
    if (msg.indexOf('[pic=') == 0) {
        msgType = '图片'
    } else if (msg.indexOf('[face=') != -1) {
        msgType = '表情'
    } else if (msg.indexOf('[file=') == 0) {
        msgType = '文件'
    } else if (msg.indexOf('[Voi=') == 0) {
        msgType = '语音'
    }
    if (msgType == 'text') return msg

    let pattern = ''
    if (msgType == '图片') pattern = /\[pic=(\S+?)\]/gi
    // if (msgType == '表情') pattern = /\[face=(\w+?)\]/gi
    if (msgType == '表情') pattern = /\[face=(\S+?)\]/gi
    if (msgType == '文件') pattern = /\[file=(\S+?)\]/gi
    if(msgType == '语音') pattern = /\[Voi=(\S+?)\]/gi
    var ms = msg.matchAll(pattern)
    for (const m of ms) {
        // console.log(m)

        let html = ''
        if (msgType == '图片' || msgType == '表情') {
            // html = `<img class="img_viewer" src="${msgType == '表情' ? faceUrl : baseImg}${m[1]}${msgType == '表情' ? '.gif' : ''}" style="${
            //   msgType == '表情' ? 'width:56px; height:56px;' : 'width:100px; height:100px;'
            // }"/>`
            // html = `<img class="img_viewer" src="${m[1]}" style="${msgType == '表情' ? 'width:56px; height:56px;' : 'width:100px; height:100px;'}"/>`
            // html = `<img v-viewer class="img_viewer" src="${m[1]}" style="${msgType == '表情' ? 'width:56px; height:56px;' : 'width:100px; height:100px;'}"/>`
            // let imgSrc = `${msgType == '表情' ? '/src/assets/img/bq/'+m[1]+'.gif' : m[1]}`
            // console.log(getImageUrl('/img/bq/'+m[1]+'.gif') )

            let imgSrc = `${msgType == '表情' ? faceUrl + m[1] + '.gif' : m[1]}`
            html = `<img  class="img_viewer" src="${imgSrc}" style="${
                msgType == '表情' ? 'width:56px; height:56px;' : 'width:100px; height:100px;'
            }"/>`
        } else if (msgType == '语音'){
            html = `<audio controls="" ref="audio" src="${m[1]}" class="audio" style="height: 38px;"></audio>`
        } else {  // 文件
            let filename = m[1].substring(m[1].lastIndexOf('/') + 1)
            //console.log(filename)
            html = `<a href="${m[1]}">${filename}</a>`
        }
        msg = msg.replace(m[0], html)
    }

    return msg
}

/**
 *  获取文件后缀
 * @param {*} filename
 * @returns
 */
export function get_suffix(filename) {
    let pos = filename.lastIndexOf('.')
    let suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix
}

export function getNowDate() {
    var myDate = new Date()
    var year = myDate.getFullYear() //获取当前年
    var mon = myDate.getMonth() + 1 //获取当前月
    var date = myDate.getDate() //获取当前日
    var hours = myDate.getHours() //获取当前小时
    var minutes = myDate.getMinutes() //获取当前分钟
    var seconds = myDate.getSeconds() //获取当前秒
    var now = year + '-' + mon + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
    return now
}
