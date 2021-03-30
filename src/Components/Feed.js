import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import './Feed.css'
import axios from '../axios'
import Pusher from 'pusher-js'

import db from '../firebase'

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
        
        {
            postsData.map(entry => (
                <Post
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timesstamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            ))
        }  
        </div>
    )
}

export default Feed
