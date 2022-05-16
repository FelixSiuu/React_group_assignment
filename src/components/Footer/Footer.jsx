import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact.jsx'
import scopeIcon from '../../assets/logo_scope.png'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer_container">
        <ul>
          <li>聯絡我們
            <span>客戶支援服務</span>
            <span>服務保障</span>
            <span>網站意見</span>
            <div className="contact_box">
              <Contact></Contact>
            </div>
          </li>
          <li>關於
            <span>關於該網站</span>
            <span>傳媒中心</span>
            <span>加入我們</span>
            <span>條款及細則</span>
            <span>私隱條款</span>
          </li>
          <li>其他服務
            <Link to="https://www.scope.edu/">City U SCOPE</Link>
          </li>
          <li>我們的技術支援
            <a href="https://www.scope.edu/" className="scopeIcon">
              <img src={scopeIcon} alt="" />
            </a>
          </li>
        </ul>
        <div className="copyRight">Copyright © 2022</div>
        </div>
    </div>
  )
}
