import React, { memo } from 'react'
import { SectionHeaderWrap } from './style'

const SectionHeader = memo((props) => {
    const {title ,subtitle } = props
  return (
    <SectionHeaderWrap>
        <div className="title">
          {title}
        </div>
        {subtitle&&<div className="subtitle">{subtitle}</div>}
        {/* <div className="subtitle">{subtitle}</div> */}
    </SectionHeaderWrap>
  )
})

export default SectionHeader