import { getHomeDataPrice, getHomeDiscount, getHomeHighScore, getHomeLongFor, getHomePlusData } from '@/service/modules/home'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getHomeData = createAsyncThunk('getHomeData',(payload,{dispatch})=> {
    getHomeDataPrice().then(res=>{
        dispatch(homeSlice.actions.getGoodPriceInfo(res))
    })
    getHomeHighScore().then(res=>{
        dispatch(homeSlice.actions.getGoodHighScore(res))
    })
    getHomeDiscount().then(res=>{
        dispatch(homeSlice.actions.getGoodDiscountInfo(res))
    })
    getHomeLongFor().then(res=>{
        // console.log('ddddddddddd',res);
        dispatch(homeSlice.actions.getGoodLongfor(res))
    })
    getHomePlusData().then(res=>{
        console.log('ddddddddddd',res);
        dispatch(homeSlice.actions.getGoodPlusData(res))
    })
    // console.log(data);
    // let data1 = await getHomeHighScore()
    // console.log(data1);
    // return {
    //     goodPrice:data,
    //     highScore:data1
    // }

})

const homeSlice = createSlice({
    name:"home",
    initialState:{
        goodPriceInfo:{

        },
        getGoodHighScore:{

        },
        getGoodDiscountInfo:{

        },
        getHomeLongfor:{

        },
        getHomePlusdata:{

        },
    },
    reducers:{
        getGoodPriceInfo(state,{payload}) {
            state.goodPriceInfo = payload
        },
        getGoodHighScore(state,{payload}) {
            state.getGoodHighScore = payload
        },
        getGoodDiscountInfo(state,{payload}) {
            state.getGoodDiscountInfo = payload
        },
        getGoodLongfor(state,{payload}) {
            state.getHomeLongfor = payload
        },
        getGoodPlusData(state,{payload}) {
            state.getHomePlusdata = payload
        },
        
    },
    // extraReducers:{
    //     [getHomeData.fulfilled](state,{payload}) {
    //         state.goodPriceInfo = payload.goodPrice
    //     }
    // }
})


export const homeReducer = homeSlice.reducer
export const action = homeSlice.actions