import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { Fragment, memo, useEffect, useState } from 'react'
import { HrightWrapper } from './style'

const Hright = memo(() => {
  const [showPanel , setShowPanel] = useState(false)
  useEffect(()=> {
    let clickfn = ()=> {
      setShowPanel(false)
    }
    window.addEventListener("click",clickfn)
    return ()=> {
      window.removeEventListener('click',clickfn)
    }
  },[])
  function changeShow(e) {
    console.log(e.stopPropagation());
    setShowPanel(!showPanel)
    // console.log(showPanel);
  }

  return (
    <HrightWrapper>
      <div className='btns'>
        <span>登录</span>
        <span>注册</span>
        
        <IconGlobal></IconGlobal>
      </div>
      <div className='profile' onClick={e=>changeShow(e)}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {showPanel&&(<div className='panel'>
            <div className="top">
              <div className="res">注册</div>
              <div className="log">登录</div>
            </div>
            <div className="btm">
              <div className="log">出租房源</div>
              <div className="log">开展体验</div>
              <div className="log">帮助</div>
            </div>
        </div>)}
      </div>
    </HrightWrapper>
  )
})

export default Hright