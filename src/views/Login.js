import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loginBg from "../static/images/beijing_denglu.png"
import DownTimeBtn from '../conponents/DownTimeBtn'
import Button from '@material-ui/core/Button';
import {userLogin} from '../api/user'
import {setUserInfo} from '../redux/action/user'
import { useDispatch } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { browserHistory } from 'react-router'

import {useSelector} from 'react-redux'
const useStyles = makeStyles({
  root: {
    height: '100%',
    width:'100%'
  },
  imgBg:{
    width: '100%',
    height: '170px',
    background: `url(${loginBg}) no-repeat 100%/100%`,
  },
  centerDiv:{
    padding: '20px'
  },
  comText:{
    fontSize:'12px',
    color:'#a2a2a2'
  },
  inputDiv:{
    width:'100%',
    height:'30px',
    borderRadius:'10px',
    background:'#f1f1f1',
    display:'flex',
    alignItems:'center',
  },
  comInput:{
    fontSize:'12px',
    color:'#a2a2a2',
    outline:'none',
    border:'none',
    background:'none',
    margin:'0px 10px 0px 10px',
    flex:'1'
  },
  comBtn: {
    width:'100%',
    borderRadius:'20px',
    marginTop:'60px',
  }
});

const Login =({history})=>{
  const dispatch = useDispatch()
  const classes = useStyles();
  const [phone,setPhone] = useState('');
  const [code,setCode] = useState('');
  const handlePhoneChange = (event) =>{
    setPhone(event.target.value);
  }
  const handleCodeChange = (event) =>{
    setCode(event.target.value)
  }
  const httpLogin = ()=>{
    history.push({
      pathname:'/home',
     });

    // userLogin({
    //   mobile:phone,
    //   verifyCode:code,
    //   platform:'1'
    // }).then(({data,code}) => {
    //   if(code === 200){
    //     console.log("登录数据："+JSON.stringify(data));
    //     dispatch(setUserInfo(data));
    //     history.push({
    //      pathname:'/home',
    //     });
    //   }
    // });
  }

  return(
    <div className={classes.root}>
      <div className={classes.imgBg}></div>
      <div className={classes.centerDiv}>
        <p className={classes.comText}>手机号码</p>
        <div className={classes.inputDiv}>
          <input className={classes.comInput} placeholder='请输入手机号'  onChange={handlePhoneChange}></input>
        </div>
        <p className={classes.comText}>验证码</p>
        <div className={classes.inputDiv}>
          <input className={classes.comInput} placeholder='请输入验证码'  onChange={handleCodeChange} value={code}></input>
          <DownTimeBtn phone={phone}></DownTimeBtn>
        </div>
        <Button className={classes.comBtn} variant="contained" color="primary" onClick={httpLogin}>登录</Button>
      </div>
    </div>
  );
}

export default withRouter(Login); 