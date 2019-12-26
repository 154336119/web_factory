import axios from 'axios'
import qs from 'qs'

export let request = axios.create({
  // baseURL:'http://api.xikeqiche.com/',
  timeout:5000
});

request.interceptors.request.use(config =>{

  console.log("上行",config)

  config.data = qs.stringify(config.data)
  return config
},error =>{
  Promise.reject(error);
});

request.interceptors.response.use(({data,config})=>{
  console.log("下行",data);
  if(data.code!==200){
    console.log("出错了");
  }
  return data
},error=>{
  console.log("出错了error:"+error);
});

export default (config)=>{
  return request({
    method:'post',
    ...config
  })
} 