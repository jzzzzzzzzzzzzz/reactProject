import React from "react"
import {Navigate} from 'react-router-dom'


const Home = React.lazy(()=>import('@/views/home'))
const Detail = React.lazy(()=>import('@/views/detail'))
const More = React.lazy(()=>import('@/views/more'))



export const routes = [
    {

        path:"/",
        element:<Navigate to="/home"></Navigate>
    },
    {

        path:"/home",
        element:<Home></Home>
    },
    {
        path:"/detail",
        element:<Detail></Detail>
    },
    {
        path:"/more",
        element:<More></More>
    },
]

