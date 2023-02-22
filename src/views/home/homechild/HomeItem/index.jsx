import RoomItem from '@/components/roomItem'
import React, { memo } from 'react'
import { HomeItemWrapper } from './style'

const HomeItem = memo((props) => {
  let {discountlist} = props
  // console.log(discountlist,9888888888888888888888);
  // alert(discountlist)
  
  return (
    <HomeItemWrapper>
      <div className="itemBox">
          {discountlist.length != "0"&&discountlist.slice(0,8).map((item) => (
            <RoomItem width="33%" key={item.id} name={item.name} items={item}></RoomItem>
          ))}
        </div>
    </HomeItemWrapper>
  )
})

export default HomeItem