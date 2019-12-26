import {SET_USER_INFO} from '../action/user'

let defaultSelf = sessionStorage.getItem('user')
export const userInfo = (state = defaultSelf? JSON.parse(defaultSelf):{},action) => {
  switch(action.type){
    case SET_USER_INFO:
      sessionStorage.setItem('user',JSON.stringify(action.userInfo));
      return {...state,...action.userInfo}
      default:
        return state;
  }
}
