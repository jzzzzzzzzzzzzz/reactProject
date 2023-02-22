import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import Hleft from './header-left'
import Hcenter from './header-center'
import Hright from './header-right'

const Header = memo(() => {
  return (
    <HeaderWrapper className='header'>
      <Hleft></Hleft>
      <Hcenter></Hcenter>
      <Hright></Hright>
    </HeaderWrapper>
  )
})

export default Header