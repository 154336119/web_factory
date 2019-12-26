import React, { useState ,useEffect } from 'react';
import ReactSwiper from 'reactjs-swiper';
import {makeStyles} from '@material-ui/core/styles';
import Homehot from '../../conponents/HomeHot';
import {getHotList} from '../../api/home'
import {getProductList} from '../../api/home'
import {httpHomeMix} from '../../api/home'
import axios from 'axios'
import HotBanner from '../../conponents/HotBanner'
const useStyle = makeStyles({
  root:{
    backgroundColor:'#f1f1f1'
  },
  swiperExample:{
    height:'200px',
    '& .swiper-img':{
      
      width:'100%'
    }
  }
});

const HomeFragment = ()=>{
  const pageSize =10
  let pageIndex = 1
  const [bannerList,setBannerList]  = useState([]);
  const [hotList,setHotList]  = useState([]);

  //页面刷新
  const pageRefresh = ()=>{
    httpHomeMix({
      pageSize:pageSize,
      pageIndex:pageIndex
    }).then(axios.spread((act1,act2,act3) => {
      console.log("==============act1："+act1.data);
      console.log('==============act2：'+act2.data);
      console.log('==============act3：'+act3.data);
      //构造banner数据
      let data1 = act1.data;
      let arr1 = [];
      data1.map((item,index) => {
        let object = {
          image:item, 
          title:'11'
        } 
        arr1.push(object)
        

      }) 
      setBannerList(arr1);
      //构造热门品牌数据
      setHotList(act2.data)
    })
    
    )
  }

  const classes = useStyle();
  useEffect(() => {
    console.log('==============useEffect执行')
    pageRefresh();
  }, [])


  const items = [{
    image: 'https://img13.360buyimg.com/cms/jfs/t1/42145/25/4920/150164/5ce69530E533c5e94/e1a7202321614d75.jpg',
    title: '图片1',
    link: 'http://jd.com'
  }, {
    image: 'https://img13.360buyimg.com/cms/jfs/t1/42145/25/4920/150164/5ce69530E533c5e94/e1a7202321614d75.jpg',
    title: '图片2',
  }, {
    image: 'https://img13.360buyimg.com/cms/jfs/t1/42145/25/4920/150164/5ce69530E533c5e94/e1a7202321614d75.jpg',
    title: '图片3',
    link: 'http://jd.com'
  }, {
    image: 'https://img13.360buyimg.com/cms/jfs/t1/42145/25/4920/150164/5ce69530E533c5e94/e1a7202321614d75.jpg',
    title: '图片4',
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay:2000,
    autoplayDisableOnInteraction: false
  }. 
  return (
    <div className = {classes.root}>
      <ReactSwiper swiperOptions={swiperOptions} showPagination items={bannerList}
                    className={classes.swiperExample} />
      <Homehot  hotBannerList ={hotList}></Homehot>
    </div>
      );
}

export default HomeFragment; 