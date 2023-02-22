import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { HcenterWrapper } from './style'


const Hcenter = memo(() => {
  return (
    <HcenterWrapper>
      <div className='text'>搜索房源和体验</div>
      <div className='icon'>
        <IconSearchBar></IconSearchBar>
      </div>
    </HcenterWrapper>
  )
})

export default Hcenter