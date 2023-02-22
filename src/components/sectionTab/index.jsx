import ScrollView from "@/base-ui/scroll-view";
import React, { memo, useState } from "react";

const SectionTab = memo((props) => {
  console.log(props.tabNames,111111111111);
  return <div>{props.tabNames}</div>;
});

export default SectionTab;
