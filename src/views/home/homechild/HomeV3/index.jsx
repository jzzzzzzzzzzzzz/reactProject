import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "@/components/longfor-item";
import SectionHeader from "@/components/sectionHeader";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { HomeV3Wrapper } from "./style";

const HomeV3 = memo(() => {
  let { getHomeLongfor } = useSelector(
    (state) => ({
      getHomeLongfor: state.home.getHomeLongfor,
    }),
    shallowEqual
  );
  console.log("rrrrr", getHomeLongfor);
  return (
    <HomeV3Wrapper className="HomeV3">
      <SectionHeader
        title={getHomeLongfor?.title}
        subtitle={getHomeLongfor?.subtitle}
      ></SectionHeader>
      <div className='room-list'>
        <ScrollView>
        {getHomeLongfor.list?.map((item, index) => (
          <div className="item" key={index}>
            <LongforItem itemData = {item} key={index}></LongforItem>
          </div>
        ))}
        </ScrollView>
        
      </div>
    </HomeV3Wrapper>
  );
});

export default HomeV3;
