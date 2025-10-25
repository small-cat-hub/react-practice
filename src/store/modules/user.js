// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { setToken as _setToken, getToken } from '@/utils'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userinfo: {}
    },
    // 同步的修改方法
    reducers:{
        setToken(state, action){
            state.token = action.payload
            // 用localstorage在本地存一份
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userinfo = action.payload
        }
    }
})

// 结构出actionCreater
const { setToken, setUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async(dispatch) => {
        // 1.发送异步请求
        const res = await request.post('/authorizations', loginForm)
        // 2.提供同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}

// 获取个人信息异步方法
const fetchUserInfo = () => {
    return async(dispatch) => {
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export { setToken, fetchLogin, fetchUserInfo }

export default userReducer