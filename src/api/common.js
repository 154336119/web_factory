import request from './request'

export function sendSms(params){
  return request({
    url:'/app/common/sms',
    data: params
  });
}