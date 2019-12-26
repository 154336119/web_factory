
import React, { useState} from 'react';
import BottomBar from '../conponents/BottomBar';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import HomeFragment from './home/HomeFragment'
import BuyCarFragment from './buyCar/BuyCarFragment'
import MineFragment from './mine/MineFragment'
import {withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux'
const useStyle = makeStyles({
  root:{
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentDiv:{
    flex:'1'
  }
});

const Home = ()=>{
  const [index,setIndex] = useState(0); 
  const userInfo = useSelector((state) => state.userInfo);
  console.log("登录页面的userInfo:"+userInfo.token);

  const porpsSetIndex = (index)=>{
    setIndex(index);
  }
  const classes = useStyle();
  return(
    <div className={classes.root}>
      <div className={classes.contentDiv}>
        {index === 0 && <HomeFragment></HomeFragment>}
        {index === 1 && <BuyCarFragment></BuyCarFragment>}
        {index === 2 && <MineFragment></MineFragment>}
      </div>
      <BottomBar index={index} porpsSetIndex={porpsSetIndex}></BottomBar>
    </div>
  );
}
export default Home;