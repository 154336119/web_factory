import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
  },
  title:{
    position:'absolute',
    zIndex:'10000',
  },
  bg:{
    position:"relative",
    width:'100px',
    height:'12px',
    backgroundImage: 'linear-gradient(to right,#a8d4f5, #dce8f2)',
    top:'10px'
  },
  bannerRoot:{
    display: 'flex',
    flexWrap:'wrap'
  },
  item:{
    width:'25%',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    height:'30px',
    width:'30px',
    margin:'0 auto'
  },
  name:{
    margin:'0 auto'
  },
  rootInside:{
    backgroundColor:'#ffffff'
  }
})

const HomeHot = (props)=>{
  const classes = useStyles();
  let {hotBannerList} = props;
  console.log("======hotBannerList:"+hotBannerList)
  return (
    <div>
      <div>
        <span className={classes.title}>热门品牌</span>
        <div className={classes.bg}></div>
      </div>
      <div className={classes.rootInside}>
        <div className={classes.bannerRoot}>
          { hotBannerList.map((item,index) =>
          <div className={classes.item}>
            <img src={item.icon} alt="" className ={classes.img}/>
            <span className={classes.name}>{item.name}</span>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeHot;