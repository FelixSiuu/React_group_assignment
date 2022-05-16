import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import notice_icon from '../../assets/notice_icon.png'
import guide_icon from '../../assets/guide_icon.png'
import level_detail from '../../assets/level_detail.jpeg'
import { getDetailAction } from '../../redux/actions.js'
import './Detail.scss'

export default connect(
  state => ({
    detail: state
  }),
  { getDetailAction }
)(
  function Detail(props) {

    const { detail } = props
    // isShow 控制expand是否顯示
    const [isShow, setShow] = useState(false)
    // original 控制顯示的是哪個圖片
    const [original, setOriginal] = useState('')
    // top 值控制expand裡面的圖片展示的位置 
    const [top, setTop] = useState(0)
    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()

    return (
      <div className="detail">
        {/* pattern */}
        <div className="pattern_detail">
          <img src={detail.descImg} alt="" />
        </div>
  
        <div className="detail_container">
  
          {/* expand box */}
          <div className="expand_box" 
            style={
              isShow 
              ? { zIndex: 9, opacity: 1 }
              : { zIndex: -1, opacity: 0 }
            }
          >
            <div className="mask" onClick={()=>{setShow(!isShow)}}></div>
            <img className="orginal_image" alt="orginal" 
              src={original}
              style={{top: top}}
            />
          </div>
  
          {
            // 沒有數據時顯示暫無更多數據
            detail.level === undefined ? (
              <div className="detail_head">
                <div className="noData">
                  暫無更多數據
                </div> 
              </div>
  
            ) : (

              // 若有數據 顯示數據詳情
              <>
                <div className="detail_head">
                  {/* route level */}
                  <div className="level">
                    <div className="left">
                      <img src={level_detail} alt="難度等級圖" />
                    </div>
                    <div className="right">
                      路線難度&nbsp;<strong style={{fontSize: '20px'}}>{ detail.level }</strong>
                    </div>
                  </div>
                </div>
              
                <div className="detail_body">
                  <div className="desc_detail">
                    { detail.desc }
                  </div>
                  {/* images */}
                  <div className="images_detail">
                    {/* img box 1 */}
                    <div className="imageBox">
                      <div className="thumb" 
                        ref={img1}
                        onClick={()=>{
                          setShow(!isShow)
                          setOriginal(detail.info[0].img)
                          setTop(img1.current.offsetTop)
                        }}
                      >
                        <img src={detail.info[0].img} alt={detail.info[0].point} title="點擊查看原圖" />
                      </div>
                      <div className="desc_img"> 
                        <p className="desc_point">{detail.info[0].point}</p>{detail.info[0].desc}
                      </div>
                    </div>

                    {/* img box 2 */}
                    <div className="imageBox">
                      <div className="desc_img">
                        {detail.info[1].desc}<p className="desc_point">{detail.info[1].point}</p>
                      </div>
                      <div className="thumb" 
                        ref={img2}
                        onClick={()=>{
                          setShow(!isShow)
                          setOriginal(detail.info[1].img)
                          setTop(img2.current.offsetTop)
                        }}
                      >
                        <img src={detail.info[1].img} alt={detail.info[1].point} title="點擊查看原圖" />
                      </div>
                    </div>

                    {/* img box 3 */}
                    <div className="imageBox">
                      <div className="thumb"
                        ref={img3}
                        onClick={()=>{
                          setShow(!isShow)
                          setOriginal(detail.info[2].img)
                          setTop(img3.current.offsetTop)
                        }} 
                      >
                        <img src={detail.info[2].img} alt={detail.info[2].point} title="點擊查看原圖" />
                      </div>
                      <div className="desc_img"> 
                        <p className="desc_point">{detail.info[2].desc}{detail.info[2].point}</p>
                      </div>
                    </div>
                  </div>

                  {/* guide */}
                  <div className="guide">
                    <div className="icon_detail_info">
                      <img src={guide_icon} alt="" />
                    </div>
                    <div className="icon_content"> {detail.way} </div>
                  </div>
                  {/* notice  */}
                  <div className="notice">
                    <div className="icon_detail_info">
                      <img src={notice_icon} alt="" />
                    </div>
                    <div className="icon_content"> { detail.notice } </div>
                  </div>

                  {/* open map button */}
                  <a href="https://www.openstreetmap.org/#map=11/22.3567/114.1363" className="button"> 打開地圖 </a>
                </div>
              </>
            )
          }
        </div>
      </div>
    )
  }
)

