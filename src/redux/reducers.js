import { GETDETAIL } from './constant.js'

const initState = {} // 初始化狀態
export default function detailReducer(preState=initState, action){
  let { data, type } = action
  // 判斷動作的類型，即type的值， 在action裡設置了
  switch(type){
    // 若動作類型為ADDONE, 則返回數據增加的值
    case GETDETAIL: return data ;
    // 返回初始值0
    default: return preState
  }
}