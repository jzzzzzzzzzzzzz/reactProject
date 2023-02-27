import RoomItem from "@/components/roomItem";
import SectionHeader from "@/components/sectionHeader";
import SectionTab from "@/components/sectionTab";
import hyRequest from "@/service";
import { getHomeHighScore } from "@/service/modules/home";
import { getHomeData } from "@/store/modules/home";
import {  Rating, Typography } from "@mui/material";
import { Button } from "antd";
import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./homechild/HomeBanner";
import HomeContent from "./homechild/HomeContent";
import { HomeWrapper } from "./style";
import classNames from 'classnames'
import HomeItem from "./homechild/HomeItem";
import HomeV3 from "./homechild/HomeV3";
import HomeV4 from "./homechild/HomeV4";
import SectionFooter from "@/components/section-footer";


const Home = memo(() => {
  let [itemList,setItemList] = useState([])
  const dispatch = useDispatch();
  let { goodPriceInfo,goodHighScore,goodDiscount } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    goodHighScore: state.home.getGoodHighScore,
    goodDiscount: state.home.getGoodDiscountInfo
  }),shallowEqual);



  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  console.log(goodPriceInfo,goodHighScore,goodDiscount);
  let discountlist = goodDiscount.dest_list?goodDiscount.dest_list:{}
  function itemClick(type) {
    console.log('====================================');
    console.log(type,999999999);
    console.log(goodDiscount.dest_list[type],616161661);
    setItemList(goodDiscount.dest_list[type])
    console.log('====================================');
  }

  const tabNames = goodDiscount.dest_address?.map(item=>item.name)
  console.log(goodDiscount,666666666);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <SectionHeader
          title={goodDiscount.title}
          subtitle={goodDiscount.subtitle}
        ></SectionHeader>
        <SectionTab tabNames={tabNames} itemClick={itemClick}></SectionTab>
        <HomeItem discountlist={itemList}></HomeItem>
        <SectionFooter></SectionFooter>

      <HomeV3></HomeV3>
      </div>
      <HomeContent  width="25%"  goodHighScore = {goodPriceInfo}></HomeContent>
      <HomeContent  width="25%"  goodHighScore = {goodHighScore}></HomeContent>
      <HomeV4></HomeV4>
    </HomeWrapper>
  );
});

export default Home;
