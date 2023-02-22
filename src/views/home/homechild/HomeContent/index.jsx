import React, { memo } from 'react'
import { HomeWrapper } from './style'
import RoomItem from "@/components/roomItem";
import SectionHeader from "@/components/sectionHeader";
const HomeContent = memo((props) => {
    let {goodHighScore,width} = props
  return (
    <HomeWrapper>
        <div className="content">
        <SectionHeader
          title={goodHighScore.title}
          subtitle={goodHighScore.subtitle}
        ></SectionHeader>
        <div className="itemBox">
          {goodHighScore.list?.slice(0,8).map((item) => (
            <RoomItem width={width} key={item.id} name={item.name} items={item}></RoomItem>
          ))}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default HomeContent