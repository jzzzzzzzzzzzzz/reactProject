import { getHomeDataPrice, getHomeDiscount, getHomeHighScore } from '@/service/modules/home'
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

        }
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
        
    },
    // extraReducers:{
    //     [getHomeData.fulfilled](state,{payload}) {
    //         state.goodPriceInfo = payload.goodPrice
    //     }
    // }
})


export const homeReducer = homeSlice.reducer
export const action = homeSlice.actions