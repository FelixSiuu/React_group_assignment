import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailAction } from '../../redux/actions.js'
import data from '../../data'
import './Nav.scss'

export default connect(
  state => ({
    detail: state
  }),
  { getDetailAction }
)(
  function Nav(props) {

    const navitage = useNavigate()
    const [isFixed, setIsFixed] = useState(false)
    const navRef = useRef()
  
    window.addEventListener('scroll', function(){
      let scrollHeight = document.documentElement.scrollTop
      if(scrollHeight >= 260){
        setIsFixed(true)
      }else{
        setIsFixed(false)
      }
    })
  
    function computedClass(){
      return isFixed ?  'nav nav_fixed' : 'nav' 
    }
  
    return (
      <div 
        ref={navRef}
        className={computedClass(navRef)}
        >
        <div className="nav_container">
          {
            data.map((navItem, index) => {
              if(index === 0){
                return (
                  // home
                  <Link to={navItem.path} className="nav_item nav_home" key={index}>{navItem.title}</Link>
                )
              }else if(index === data.length - 1){
                return (
                  // about
                  <Link to={navItem.path} className="nav_item about" key={index}>{navItem.title}</Link>
                )
              }else{
                return (
                  // 香港，九龍，新界，離島
                  <Link 
                    to={navItem.path} 
                    className="nav_item" 
                    key={index}
                    // 在接收方(Introduction)使用useLocation方法獲取state argu
                    state={navItem.children}
                  >
                    {navItem.title}
                    {/* 下滑的menu */}
                    <div className="slideDown">
                    {
                      navItem.children.map((subNavItem, index) => {
                        return (
                          <div 
                            className='slideDown_item'
                            onClick={(e)=>{
                              // 點擊下滑menu ，透過redux傳送詳細數據去detail page
                              // 阻止跳轉到父元素鏈接的默認行為
                              e.preventDefault()
                              navitage(subNavItem.path)
                              props.getDetailAction(subNavItem)
                            }} 
                            key={index}
                          > 
                            {subNavItem.location}
                          </div>
                        )
                      })
                    }
                    </div>
                  </Link>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
)

