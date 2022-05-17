import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailAction } from '../../redux/actions.js'
import './Introduction.scss'
import Loading from '../../components/Loading/Loading.jsx'

export default connect(
  state => ({
    detail: state
  }),
  { getDetailAction }
)(
  function Introduction(props) {

    const {state: descList} = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{},[descList])

    return (
      <div className="introduction">
        { 
          descList.length === 0 
          ? <Loading />
          :         
            <>
            {
              descList.map((item,index) => {
                return (
                  <div className="introduction_box" key={index}>
                    <img 
                      src={item.descImg} 
                      alt={item.location} 
                      style={{cursor: 'pointer'}}  
                      onClick={()=>{
                        props.getDetailAction(item)
                        navigate('/detail')
                      }}
                    />
                    <div className="route_desc">
                      {item.desc}
                    </div>
                  </div>  
                )
              })
            }
            </>
        }

      </div>
    )
  }
)

