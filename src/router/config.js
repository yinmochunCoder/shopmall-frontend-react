import Login from '../views/Login'
import Home from '../views/Home'
import Register from '../views/Register'
export const routerConfigs = [
    {
        path: '/'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/register',
        component: Register
    }
]
