import React from 'react'
import PostView from '../../components/post/PostView'
import Navbar from '../../components/nav/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <PostView/>
        <PostView/>
        <PostView/>
    </>
  )
}

export default Home