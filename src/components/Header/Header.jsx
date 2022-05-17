import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav.jsx'
import logoSrc from '../../assets/logo_header.png'
import Contact from '../../components/Contact/Contact.jsx'
import userIcon from '../../assets/icons/icon_user.png'
import data from '../../data'
import './Header.scss'

export default function Header() {

  // 控制字體大小
  const largeRef = useRef()
  const medimuRef = useRef()
  const [isLogin, setIsLogin] = useState(true)
  // 搜尋關鍵字
  const [keyWord, setkeyWord] = useState('')
  // for 搜尋功能的列表
  const [routeList, setList] = useState([])
  // argu introduction page
  const [routeItem, setItem] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    // 標準字體按鈕默認顯示為disabled狀態
    medimuRef.current.disabled = true
  },[])

  useEffect(()=>{
  },[isLogin,routeItem])

  useEffect(()=>{
    const newList = data.filter(item => {
      return item.children.length !== 0
    })
    setList(newList)
  },[])

  // 操作html 元素修改font size 
  const switchFontSize = (size) => {
    const htmlEle = document.documentElement

    if(size === 'medium'){
      return () => {
        htmlEle.style = 'font-size: 16px'
        medimuRef.current.disabled = true
        largeRef.current.disabled = false
      }
    }else if(size === 'large'){
      return () => {
        htmlEle.style = 'font-size: 20px'
        medimuRef.current.disabled = false
        largeRef.current.disabled = true
      }
    }
  }

  // 點擊搜尋按鈕
  function handleSearch(){
    const filterItem = routeList.filter(item => {
      return item.title === keyWord
    })
    setItem(filterItem[0].children);
    navigate('/introduction', {state: routeItem})

  }

  return (
    <>
      {/* head */}
      <div className='header'>
        <div className="header_container">
          {/* head */}
          <div className="info_head">
            <div className="contact_box">
              <div style={{color: 'gray'}}>關注我們：</div>
              <Contact />
              <div className="userBox">
                <div className="userIcon">
                  <img src={userIcon} alt="" />
                </div>
                {
                  localStorage.getItem('username') === null 
                  ? <Link to='/login' className="login_header">登入</Link> 
                  : <span className="helloUser">Hi,  
                      <span className="name">{localStorage.getItem('username')}</span> / 
                      <button 
                        onClick={()=>{
                          localStorage.removeItem('username')
                          setIsLogin(!isLogin)
                        }}>登出</button>
                    </span>
                }
              </div>
            </div>
          </div>

          {/* body */}
          <div className="info_body">
            {/* body_left */}
            <div className="leftBox">
              <Link to='/home' className="header_title"></Link>
              <div className="inputBox">
                <button className="searchButton" 
                  onClick={handleSearch}
                >
                  搜尋
              </button>
              <input type="text" className="input_header" 
                placeholder="搜尋路綫(e.g. 香港)" 
                onChange={(e)=>{
                  setkeyWord(e.target.value)
                }}  
              />
              <div className="magnifying"></div>
              </div>

              <div className="hot">
                熱門： 
                <span>香港</span>
                <span>離島</span>
              </div> 
            </div>
            {/* body_right */}
            <div className="rightBox">
              <Link to='/home' className="logo">
                <img src={logoSrc} alt="" />
              </Link>
              <div className="fontsBox">
                字體大小： 
                <input type="button" 
                  value="a" 
                  className="medium" 
                  onClick={switchFontSize('medium')}
                  ref={medimuRef}
                />
                <span> &nbsp; / &nbsp; </span>
                <input type="button" 
                  value="A" 
                  className="large" 
                  onClick={switchFontSize('large')}
                  ref={largeRef}
                />
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* nav */}
      <Nav />
    </>

  )
}
