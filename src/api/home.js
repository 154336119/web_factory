import request from './request'
import axios from 'axios'

export function getHomeBannerList(){
  return request({
    url: '/app/banner/list'
  });
}

export function getHotList(){
  return request({
    url: 'app/product/brand/hotList'
  });
}

export function getProductList(params){
  return request({
    url:'app/product/hotList',
    data: params
  })
  
}

export function httpHomeMix(productListParams){
  return axios.all([getHomeBannerList(),getHotList(),getProductList(productListParams)])
}