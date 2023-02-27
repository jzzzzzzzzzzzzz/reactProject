import React, { memo } from 'react'
import { MoreWrapper } from './style'

const More = memo(() => {
  return (
    <MoreWrapper>
      <div className='filter'>filter-section</div>
      <div className='rooms'>room-section</div>
      <div className='pagination'>pagination-section</div>
    </MoreWrapper>
  )
})

export default More