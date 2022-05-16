import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
// import swiper src
import hk from '../../assets/swiper/swiper_hk.jpg'
import nt from '../../assets/swiper/swiper_nt.jpg'
import islands from '../../assets/swiper/swiper_island.jpg'
import kln from '../../assets/swiper/swiper_kln.jpg'
import './Home.scss'
import data from '../../data'

export default function Home() {

  const carouselSrc = [ 
    { img: hk, title: '大潭水塘' },
    { img: kln, title: '獅子山' },
    { img: nt, title: '青馬大橋' },
    { img: islands, title: '天壇大佛' },
  ]

  return (
    <div className="home">
      <div className="patterns"></div>
      <div className='home_container'>
        <div className="carousel_home">
          {/* Carousel */}
          <Carousel 
            showArrows={true}
            styles={styles}
            autoPlay
            infiniteLoop
          >
            {
              carouselSrc.map((item,index) => {
                return (
                  <div key={index}>
                    <img src={item.img} alt={item.title}/>
                    <p className="legend">{item.title}</p>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        

        {/* promo video */}
        <div className="promo_video">
          <div className="video_container">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/d3MoEzlAvj4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        {/* slogan */}
        <div className="slogan">
          Let's go hiking for pleasure
        </div>

        {/* area */}
        <div className="area">
          {
            data.map((item, index) => {
              if(index !== 0 && index !== data.length - 1){
                return (
                  <Link 
                    to={item.path} 
                    className="area_item" 
                    key={index}
                    state={item.children}
                  >
                    <img src={item.areaImg} alt={item.title} />
                  </Link>
                )  
              }else{
                return false
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
