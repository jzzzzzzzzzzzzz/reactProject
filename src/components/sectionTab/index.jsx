import ScrollView from "@/base-ui/scroll-view";
import React, { memo, useEffect, useState } from "react";
import { SectionTabWrapper } from "./style";

const SectionTab = memo((props) => {
  let [isActive,setIsActive] = useState(0)
  let {tabNames=[]} = props
  console.log('====================================');
  console.log(tabNames,2222);
  console.log('====================================');
  useEffect(()=> {
    if(tabNames.length) {
      changeIndex(0,tabNames[0])
    }
  },[tabNames[0]])

  function changeIndex(num,item) {
    setIsActive(num)
    props.itemClick(item)
  }
  return <SectionTabWrapper className="tab">
    <ScrollView>
    {tabNames.map((item,index)=>(
      <div className={['item',isActive == index?'active':''].join(' ')} key={index} onClick={e=>changeIndex(index,item)}>
        {item}
      </div>
    ))}
    </ScrollView>
  </SectionTabWrapper>;
});

export default SectionTab;
