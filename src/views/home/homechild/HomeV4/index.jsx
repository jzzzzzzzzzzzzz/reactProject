import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "@/components/longfor-item";
import RoomItem from "@/components/roomItem";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/sectionHeader";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { HomeV4Wrapper } from "./style";

const HomeV4 = memo(() => {
  let { getHomePlusdata } = useSelector(
    (state) => ({
      getHomePlusdata: state.home.getHomePlusdata,
    }),
    shallowEqual
  );
  console.log("rrrrr", getHomePlusdata);
  return (
    <HomeV4Wrapper className="HomeV3">
      <SectionHeader
        title={getHomePlusdata?.title}
        subtitle={getHomePlusdata?.subtitle}
      ></SectionHeader>
      <div className='room-list'>
        <ScrollView>
        {getHomePlusdata.list?.map((item, index) => (
          <div className="item" key={index}>
            {/* <LongforItem itemData = {item} key={index}></LongforItem> */}
            <RoomItem width="33%" key={item.id} name={item.name} items={item}></RoomItem>

          </div>
        ))}
        {/* <div className="itemBox">
          {discountlist.length != "0"&&discountlist.slice(0,8).map((item) => (
            <RoomItem width="33%" key={item.id} name={item.name} items={item}></RoomItem>
          ))}
        </div> */}
        </ScrollView>
        <SectionFooter name={getHomePlusdata.title}></SectionFooter>
        
      </div>
    </HomeV4Wrapper>
  );
});

export default HomeV4;
