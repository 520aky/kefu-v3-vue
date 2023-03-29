import request from './request'

export function getCustInfo(params) {
  return request({
    url: '/api/cust/getcustinfo',
    method: 'get',
    params,
  })
}

// 取会话列表
export function getSessList(params) {
  return request({
    url: '/api/cust/getsesslist',
    method: 'get',
    params,
  })
}

// 查询用户信息
export function getUserinfo(params) {
  return request({
    url: '/api/cust/getuserinfo',
    method: 'get',
    params,
  })
}

// 取聊天记录
export function getChatList(params) {
  return request({
    url: '/api/cust/getchatlist',
    method: 'get',
    params,
  })
}

// 发送消息
export function sendMsg(params) {
  return request({
    url: '/api/cust/sendmsg',
    method: 'get',
    params,
  })
}

// 设置置顶
export function setTop(params) {
  return request({
    url: '/api/cust/settop',
    method: 'get',
    params,
  })
}

/**
 * 修改备注
 * @param {*} params  mid:  note:
 * @returns
 */
export function setNote(params) {
  return request({
    url: '/api/cust/setnote',
    method: 'get',
    params,
  })
}

/**
 * 清空聊天记录
 * @param {*} params  mid:
 * @returns
 */
export function delChat(params) {
  return request({
    url: '/api/cust/delchat',
    method: 'get',
    params,
  })
}

/**
 * 清空聊天记录
 * @param {*} params  mid:   type=类型(0=删除指定，需要提供[mid]参数 1=删除3天前  2=删除5天前 3=删除全部)
 * @returns
 */
export function delSession(params) {
  return request({
    url: '/api/cust/delsession',
    method: 'get',
    params,
  })
}

/**
 * 清空聊天记录
 * @param {*} params  mid:
 * @returns
 */
export function addBlack(params) {
  return request({
    url: '/api/cust/addblank',
    method: 'get',
    params,
  })
}

/**
 * 消息已读
 * @param {*} params  mid:
 * @returns
 */
export function read(params) {
  return request({
    url: '/api/cust/read',
    method: 'get',
    params,
  })
}

//
/**
 * 取私聊二维码
 * @returns
 */
export function getSessCode(params) {
  return request({
    url: '/api/cust/getsesscode',
    method: 'get',
    params,
  })
}

/**
 * 操作二维码
 * @returns
 * @param {*} params  type=类型(0=失效当前二维码  1=重新生成二维码)
 */
export function setSessCode(params) {
  return request({
    url: '/api/cust/setcode',
    method: 'get',
    params,
  })
}

/**
 *
 * @param {*} params   Type=类型 0=头像  1=预设内容(群发、打招呼、等内容)  2=发送图片    name: 文件名的md5值
 * @returns
 */
export function upload(params) {
  return request({
    url: '/api/cust/upload',
    method: 'get',
    params,
  })
}

// 上传到阿里云
export function uploadAliOss(url, formData) {
  // let config = {
  //   Headers: {
  //     'Content-Type' :'multipart/form-data'
  //   }
  // }
  // return request.post(url, formData, config)
  return request({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  })
}

/**
 * 取群发列表
 * @param {*} params   Type=类型 0=头像  1=预设内容(群发、打招呼、等内容)  2=发送图片    name: 文件名的md5值
 * @returns
 */
export function getMassList(params) {
  return request({
    url: '/api/cust/getmasslist',
    method: 'get',
    params,
  })
}

/**
 * 新建群发
 * @param {*} params  Type=类型 (0=文本  1=图片[图片]需先调用上传接口获取路径) msg=文本内容或图片路径(需要用AES加密之后提交)
 * @returns 
 */
export function addMass(params) {
  return request({
    url: '/api/cust/addmass',
    method: 'get',
    params,
  })
}

/**
 * 编辑群发 
 * @param {*} params  id:    msg: 群发消息
 * @returns 
 */
export function setMass(params) {
  return request({
    url: '/api/cust/setmass',
    method: 'get',
    params,
  })
}
/**
 * 上移群发 
 * @param {*} params  id:   
 * @returns 
 */
export function onMass(params) {
  return request({
    url: '/api/cust/onmass',
    method: 'get',
    params,
  })
}


/**
 * 下移群发 
 * @param {*} params  id:   
 * @returns 
 */
export function unMass(params) {
  return request({
    url: '/api/cust/unmass',
    method: 'get',
    params,
  })
}


/**
 * 删除群发 
 * @param {*} params  id:   
 * @returns 
 */
export function delMass(params) {
  return request({
    url: '/api/cust/delmass',
    method: 'get',
    params,
  })
}



/**
 * 删除群发 
 * @param {*} params  id:   
 * @returns 
 */
export function startMass(params) {
  return request({
    url: '/api/cust/startmass',
    method: 'get',
    params,
  })
}



/**
 * 取打招呼列表 
 * @param {*} params  id:   
 * @returns 
 */
export function getSayList(params) {
  return request({
    url: '/api/cust/getsaylist',
    method: 'get',
    params,
  })
}




/**
 * 新建打招呼
 * @param {*} params  id:      msg: 需要用AES加密之后提交
 * @returns 
 */
export function addSay(params) {
  return request({
    url: '/api/cust/addsay',
    method: 'get',
    params,
  })
}


/**
 * 新建打招呼
 * @param {*} params  id:      msg: 需要用AES加密之后提交
 * @returns 
 */
export function setSay(params) {
  return request({
    url: '/api/cust/setsay',
    method: 'get',
    params,
  })
}



/**
 * 打招呼上移
 * @param {*} params  id:   
 * @returns 
 */
export function onSay(params) {
  return request({
    url: '/api/cust/onsay',
    method: 'get',
    params,
  })
}



/**
 * 打招呼上移
 * @param {*} params  id:   
 * @returns 
 */
export function unSay(params) {
  return request({
    url: '/api/cust/unsay',
    method: 'get',
    params,
  })
}



/**
 * 打招呼上移
 * @param {*} params  id:   
 * @returns 
 */
export function delSay(params) {
  return request({
    url: '/api/cust/delsay',
    method: 'get',
    params,
  })
}


/**
 * 取快捷回复列表
 * @param {*} params  id:   
 * @returns 
 */
export function getFastList(params) {
  return request({
    url: '/api/cust/getfastlist',
    method: 'get',
    params,
  })
}


/**
 * 新增快捷回复
 * @param {*} params  id:     msg:   需要aes加密
 * @returns 
 */
export function addFast(params) {
  return request({
    url: '/api/cust/addfast',
    method: 'get',
    params,
  })
}



/**
 * 编辑快捷回复
 * @param {*} params  id:     msg:   需要aes加密
 * @returns 
 */
export function setFast(params) {
  return request({
    url: '/api/cust/setfast',
    method: 'get',
    params,
  })
}




/**
 * 上移动快捷回复
 * @param {*} params  id:  
 * @returns 
 */
export function onFast(params) {
  return request({
    url: '/api/cust/onfast',
    method: 'get',
    params,
  })
}



/**
 * 下移动快捷回复
 * @param {*} params  id:  
 * @returns 
 */
export function unFast(params) {
  return request({
    url: '/api/cust/unfast',
    method: 'get',
    params,
  })
}




/**
 * 删除快捷回复
 * @param {*} params  id:  
 * @returns 
 */
export function delFast(params) {
  return request({
    url: '/api/cust/delfast',
    method: 'get',
    params,
  })
}


/**
 * 取智能回答列表
 * @param {*} params  id:  
 * @returns 
 */
export function getQualist(params) {
  return request({
    url: '/api/cust/getqualist',
    method: 'get',
    params,
  })
}


/**
 * 新增智能问答
 * @param {*} params  type: (0=文本 1=图片)   q: 问题   a: 答案
 * @returns 
 */
export function addQua(params) {
  return request({
    url: '/api/cust/addqua',
    method: 'get',
    params,
  })
}





/**
 * 编辑智能问答
 * @param {*} params  id:   q: 问题   a: 答案
 * @returns 
 */
export function setQua(params) {
  return request({
    url: '/api/cust/setqua',
    method: 'get',
    params,
  })
}



/**
 * 上移智能问答
 * @param {*} params  id:  
 * @returns 
 */
export function onQua(params) {
  return request({
    url: '/api/cust/onqua',
    method: 'get',
    params,
  })
}


/**
 * 下移智能问答
 * @param {*} params  id:  
 * @returns 
 */
export function unQua(params) {
  return request({
    url: '/api/cust/unqua',
    method: 'get',
    params,
  })
}



/**
 * 删除智能问答
 * @param {*} params  id:  
 * @returns 
 */
export function delQua(params) {
  return request({
    url: '/api/cust/delqua',
    method: 'get',
    params,
  })
}


/**
 * 取统计数据
 * @param {*} params  id:  
 * @returns 
 */
export function getStati(params) {
  return request({
    url: '/api/cust/getstati',
    method: 'get',
    params,
  })
}

/**
 * 修改昵称
 * @param {*} params  nick=昵称 （AES加密）
 * @returns 
 */
export function setNick(params) {
  return request({
    url: '/api/cust/setnick',
    method: 'get',
    params,
  })
}



/**
 * 取黑名单列表
 * @param {*} params  page  limit
 * @returns 
 */
export function getBlackList(params) {
  return request({
    url: '/api/cust/getblanklist',
    method: 'get',
    params,
  })
}


/**
 * 删除黑名单
 * @param {*} params  mid
 * @returns 
 */
export function delBlack(params) {
  return request({
    url: '/api/cust/delblank',
    method: 'get',
    params,
  })
}



/**
 * 修改客服信息
 * @param {*} params  nick: aes加密   pic:图片路径
 * @returns 
 */
export function setCustInfo(params) {
  return request({
    url: '/api/cust/setinfo',
    method: 'get',
    params,
  })
}


/**
 * 取接待列表
 * @param {*} params  nick: aes加密   pic:图片路径
 * @returns 
 */
export function getRecepList(params) {
  return request({
    url: '/api/cust/getreceplist',
    method: 'get',
    params,
  })
}



/**
 * 新建群聊
 * @param {*} params  nick: aes加密   pic:图片路径  announ: 公告(aes加密)  banned： 禁言 (0关闭 1开启)
 * @returns 
 */
export function addGroup(params) {
  return request({
    url: '/api/cust/addgroup',
    method: 'get',
    params,
  })
}







/**
 * 新建群聊
 * @param {*} params mid: ''  nick: aes加密   pic:图片路径  announ: 公告(aes加密)  banned： 禁言 (0关闭 1开启)
 * @returns 
 */
export function setGroup(params) {
  return request({
    url: '/api/cust/setgroup',
    method: 'get',
    params,
  })
}




/**
 * 获取群聊成员列表
 * @param {*} params mid
 * @returns 
 */
export function getGroupList(params) {
  return request({
    url: '/api/cust/getgroulist',
    method: 'get',
    params,
  })
}


/**
 * 获取群聊成员列表
 * @param {*} params mid：群聊mid   gmid: 群成员mid  time 禁言时间(0=解除禁言)
 * @returns 
 */
export function setBanned(params) {
  return request({
    url: '/api/cust/setbanned',
    method: 'get',
    params,
  })
}


/**
 * 取群聊二维码
 * @param {*} params mid：群聊mid 
 * @returns 
 */
export function getGroupCode(params) {
  return request({
    url: '/api/cust/getgroupcode',
    method: 'get',
    params,
  })
}



/**
 * 刷新群聊二维码
 * @param {*} params mid：群聊mid 
 * @returns 
 */
export function refGroupCode(params) {
  return request({
    url: '/api/cust/refgroupcode',
    method: 'get',
    params,
  })
}

/**
 * 刷新群聊二维码
 * @param {*} params mid：群聊mid 
 * @returns 
 */
export function delGroup(params) {
  return request({
    url: '/api/cust/delgroup',
    method: 'get',
    params,
  })
}



/**
 * 移除群聊成员
 * @param {*} params mid：群聊mid   gmid: 群成员mid
 * @returns 
 */
export function delGroupMember(params) {
  return request({
    url: '/api/cust/delgrouplist',
    method: 'get',
    params,
  })
}








































































