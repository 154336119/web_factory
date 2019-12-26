import React, { useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
  img: {
    height:'30px',
    width:'30px'
  }
})

const HotBanner = (props)=> {
  const classes = useStyle();
  let {hotBannerList} = props;
  console.log("======hotBannerList:"+hotBannerList)

  return (
      <div>
        { hotBannerList.map((item,index) =>
         <div>
           <img src={item.icon} alt="" className ={classes.img}/>
            {item.name}
         </div>
         )}
      </div>
  );
}

export default HotBanner