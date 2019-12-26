import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {sendSms} from '../api/common'
const useStyles = makeStyles({
  btn: {
    background:'#ffffff',
    border:'1px solid #1c90ff',
    outline:'none',
    borderRadius:'10px',
    margin:'0px 10px 0px 0px',
    padding:'2px 10px',
    color:'#1c90ff',
    width:'90px'
  },
  btnDisable:{
    border:'1px solid #a2a2a2',
    color:'#a2a2a2',
  }
});

const DownTimeBtn = (props)=>{
  const {phone} = props;
  const [bean,setBean] = useState({
    btnText:'发送验证码',
    timer:3,
    disCodeBtn:false,
    clearInterval:false
  });

  const send = ()=>{
    sendSms({
      mobile:phone
    }).then(({data,code})=>{
      if(code === 200){
        console.log(data)
      }
    })
  }

  const downTiemFun = ()=>{
    //没用
    if(phone === null){
      return;
    }
    send();
    let key = setInterval(() => {
      console.log("bean.timer:"+bean.timer)
      if(bean.timer === 0){
        clearInterval(key);
        setBean( {timer:3,btnText:"重新发送",disabled:false})
        return;
      }
      setBean({btnText:bean.timer,timer:(bean.timer--),disabled:true})
    }, 1000);
  }

  const classes = useStyles();
  return(
    <button 
      className={bean.disabled ? clsx(classes.btn,classes.btnDisable) : classes.btn} 
      onClick={downTiemFun} disabled={bean.disabled}>
      {bean.btnText}
    </button>
  );
}


export default DownTimeBtn;