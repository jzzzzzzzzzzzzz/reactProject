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


const Home = memo(() => {
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


  const tabNames = goodDiscount.dest_address?.map(item=>item.name)
  console.log(tabNames);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <SectionHeader
          title={goodDiscount.title}
          subtitle={goodDiscount.subtitle}
        ></SectionHeader>
        <SectionTab tabNames={tabNames}></SectionTab>
        <div className="itemBox">
          {Object.keys(discountlist).length&&discountlist["佛山"].slice(0,8).map((item) => (
            <RoomItem width="33%" key={item.id} name={item.name} items={item}></RoomItem>
          ))}
        </div>
      </div>
      <HomeContent  width="25%"  goodHighScore = {goodPriceInfo}></HomeContent>
      <HomeContent  width="25%"  goodHighScore = {goodHighScore}></HomeContent>
    </HomeWrapper>
  );
});

export default Home;
