import { themeColor } from '@/assets/theme'
import { Rating } from '@mui/material'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const {items,width} = props
  const {verify_info,picture_url,name,price_format,star_rating,reviews_count,bottom_info} = items
  return (
    <RoomItemWrapper color={verify_info?.text_color || '#39576a'} width={width}>
      <div className="inner">
        <div className="cover">
          <img src={picture_url} alt="" />
        </div>
        <div className='desc'>
          {verify_info.messages.join("·")}
        </div>
        <div className="name">{name}</div>
        <div className="price">{price_format+"/晚"}</div>
        <div>
        <Rating precision={0.1} name="read-only" value={star_rating??4.5} readOnly  size="small" sx={{fontSize:"14px",color:themeColor.secondryColor,marginTop:"2px",float:"left"}}/>
        <span style={{fontSize:"8px"}}>{reviews_count}</span>
        <span style={{fontSize:"8px"}}>{bottom_info&&" · "+bottom_info.content}</span>
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem