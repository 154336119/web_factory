import request from './request'

export function userLogin(params){
  return request({
    url:'/app/user/login',
    data:params
  })
}