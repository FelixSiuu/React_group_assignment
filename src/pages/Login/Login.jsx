import React,{ useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import textTips from '../../assets/tips/tips_text.jpg'
import pwdTips from '../../assets/tips/tips_pwd.jpg'
import './Login.scss'

export default function Login() {

  // useRef() for switch className
  const textTipsRef = useRef()
  const pwdTipsRef = useRef()
  const successTipsRef = useRef()
  const formRef = useRef()
  // for show pwd button
  const [showPwd, setShopwPwd] = useState(false)
  // save value for text & pwd
  const [textValue, setTextValue] = useState('')
  const [pwdValue, setPwdValue] = useState('')
  const navigate = useNavigate()

  // focus input ele
  const handleFocus = (type) => {
    if(type === 'text'){
      return () => {
        pwdTipsRef.current.className = 'pwdTips';
        textTipsRef.current.className = 'textTips showTips';
      }
    }else if(type === 'pwd'){
      return () => {
        textTipsRef.current.className = 'textTips';
        pwdTipsRef.current.className = 'pwdTips showTips';
      }
    }
  }

  // save value
  const saveValue = (type) => {
    if(type === 'text'){
      return (e) => {
        setTextValue(e.target.value)
      }  
    }else if(type === 'pwd'){
      return (e) => {
        setPwdValue(e.target.value)
      }
    }
  }

  // verfity submit
  const handleSubmit = () => {
    if(pwdValue !== '123456'){
      alert('請輸入密碼：123456')
    }else{
      localStorage.setItem('username', textValue)
      formRef.current.className = 'form form_success'
      pwdTipsRef.current.className = 'pwdTips';
      textTipsRef.current.className = 'textTips';
      successTipsRef.current.className = 'successTips showSuccessTips'
      successTipsRef.current.innerText = `歡迎回來，${textValue}`
      setTimeout(()=>{
        // when login success , go back to last page
        navigate(-1)
      },2000)
    }
  }

  return (
    <div className="login_container">
      {/* left form */}
      <div className="form" ref={formRef}>

        {/* username box */}
        <div className="username">
          <label htmlFor="username">用戶名</label>
          <input 
            type="text" 
            className="input_login" 
            id="username" 
            placeholder="請輸入你的用戶名" 
            onFocus={handleFocus('text')}
            onChange={saveValue('text')}
          />
        </div>

        {/* password box */}
        <div className="password">
          <label htmlFor="password">密碼</label>
          <input 
            type={ showPwd? "text" : "password" } 
            className="input_login" 
            id="password"
            placeholder="請輸入你的密碼" 
            onFocus={handleFocus('pwd')} 
            onChange={saveValue('pwd')}
          />
          <div 
            className="showPwd" 
            onClick={()=>{setShopwPwd(!showPwd)}}
          >
            { showPwd? '隱藏' : '顯示' }
          </div>
        </div>
        
        {/* submit box */}
        <div className="submit">
          <button className="button_login" onClick={()=>{handleSubmit()}}>登入</button>
        </div>
      </div>

      {/* right images */}
      <div className="tips">
        <div className="textTips showTips" ref={textTipsRef}>
          <img src={textTips} alt="" />
        </div>
        <div className="pwdTips" ref={pwdTipsRef}>
          <img src={pwdTips} alt="" />
        </div>
        <div className="successTips" ref={successTipsRef}></div>
      </div>
  </div>
  )
}
