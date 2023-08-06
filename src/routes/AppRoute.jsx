import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../screens/login/Login'
import Register from '../screens/register/Register'
import PostView from '../components/post/PostView'
import Home from '../screens/home/Home'

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/test' element={<PostView />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </>
    )
}

export default AppRoute