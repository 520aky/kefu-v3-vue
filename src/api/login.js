import request from './request'


//用户名密码登录
export function login( params ){
	return request({
		url:'/api/cust/login',
		method:'get',
		params
	})
}

// 卡密续费
export function renewal(params){
	return request({
		url:'/api/cust/renewal',
		method:'get',
		params
	})
}