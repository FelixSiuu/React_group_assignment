import React from 'react'
import aboutBanner from '../../assets/about_banner.png'
import './About.scss'

export default function About() {
  return (
    <>
    {/* about container */}
    <div className="about_container">
      <div className="about_banner">
        <img src={aboutBanner} alt="" />
      </div>
      <div className="about_box">
        <div className="aboutBox_head">
          關於我們
        </div>
        <div className="aboutBox_body">
          本網站僅作學習使用，數據來源於：&nbsp;
          <a href="https://follo3me.com/" className='dataSource'>隨我行FolloMe</a>
        </div>
      </div>
    </div>
    </>
  )
}
