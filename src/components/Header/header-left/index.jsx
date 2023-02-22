import Icon1 from '@/assets/svg/Icon1'
import React, { memo } from 'react'
import { HleftWrapper } from './style'

const Hleft = memo(() => {
  return (
    <HleftWrapper>
      <span className='log'>
      <Icon1></Icon1>
      </span>
    </HleftWrapper>
  )
})

export default Hleft