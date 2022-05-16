import React from 'react'
import { Link } from 'react-router-dom'
import './Animation.scss'

export default function Animation() {
  return (
    <div className='animate_box'>
      <Link to="/home">
        點擊前往主頁
      </Link>
    </div>
  )
}
