import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./modules/home";
import { moreReducer } from "./modules/more/reducer";

// 创建一个仓库
const store = configureStore({
    reducer:{
        home:homeReducer,
        more:moreReducer
    }
})
export default store;