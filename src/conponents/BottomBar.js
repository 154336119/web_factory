
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import shouye_a from "../static/images/shouye_a.png"
import shouye_b from "../static/images/shouye_b.png"
import gouwuche_a from "../static/images/gouwuche_a.png"
import gouwuche_b from "../static/images/gouwuche_b.png"
import wode_a from "../static/images/wode_a.png"
import wode_b from "../static/images/wode_b.png"
import clsx from 'clsx';
const useStyle = makeStyles({
  root:{
    display:'flex'
  },
  img:{
    flex:'1'
  },
  divShouyeA:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${shouye_a}) no-repeat 100%/100%`
  },
  divShouyeB:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${shouye_b}) no-repeat 100%/100%`
  },
  divGwcA:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${gouwuche_a}) no-repeat 100%/100%`
  },
  divGwcB:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${gouwuche_b}) no-repeat 100%/100%`
  },
  divMineA:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${wode_a}) no-repeat 100%/100%`
  },
  divMineB:{
    margin:'0 auto',
    height:'30px',
    width:'30px',
    background: `url(${wode_b}) no-repeat 100%/100%`
  },
  divItem:{
    flex:'1',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
  },
  choiseColor:{
    color: '#000000',
  },
  noChoiseColor:{
    color: '#bebbb6',
  },
});

const BottomBar = (props) =>{

  const {index,porpsSetIndex} = props; 

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.divItem} onClick = {()=>{porpsSetIndex(0)}}>
          <div className={clsx(index === 0 ?classes.divShouyeA : classes.divShouyeB)}></div>
          <div className={clsx(index === 0 ?classes.choiseColor : classes.noChoiseColor)}>首页</div>
      </div>   
      <div className={classes.divItem} onClick = {()=>{porpsSetIndex(1)}}>
      <div className={clsx(index === 1?classes.divGwcA : classes.divGwcB)}></div>
          <div className={clsx(index === 1 ?classes.choiseColor : classes.noChoiseColor)}>购物车</div>
      </div>   
      <div className={classes.divItem} onClick = {()=>{porpsSetIndex(2)}}>
      <div className={clsx(index === 2 ?classes.divMineA : classes.divMineB)}></div>
          <div className={clsx(index === 2 ?classes.choiseColor : classes.noChoiseColor)}>我的</div>
      </div>
    </div>
  );
}

export default BottomBar