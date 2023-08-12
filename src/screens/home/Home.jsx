import React from 'react'
import PostView from '../../components/post/PostView'
import Navbar from '../../components/nav/Navbar'
import NewPost from '../../components/post/NewPost'

const Home = () => {
  return (
    <>
        <Navbar/>
        <NewPost/>
        <PostView/>
        <PostView/>
        <PostView/>
    </>
  )
}

export default Home