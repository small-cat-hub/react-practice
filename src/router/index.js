// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";
import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'

// 配置路由实例

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><Layout /></AuthRoute>,
        children:[
            {
                index: true
            },
            {
                path:'article',
                element: <Article />
            },
            {
                path:'publish',
                element: <Publish />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router