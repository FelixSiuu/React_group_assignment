import React from 'react'
import fb from '../../assets/icons/icon_facebook.png'
import ins from '../../assets/icons/icon_instagram.png'
import wechat from '../../assets/icons/icon_wechat.png'
import youtube from '../../assets/icons/icon_youtube.png'
import './Contact.scss'

export default function Contact() {

  const contactIcon = [
    fb, ins, wechat, youtube
  ]

  return (
    <div className='contact'>
      {
        contactIcon.map((item,index) => {
          return (
            <span className="contact_icon" key={index} >
              <img src={item} alt="" />
            </span>
          )
        })
      }
    </div>
  )
}
