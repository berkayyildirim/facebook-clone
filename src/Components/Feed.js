import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import './Feed.css'
import axios from '../axios'
import Pusher from 'pusher-js'

import db from '../firebase'

const pusher = new Pusher('216d827972d999ff6f5d', {
    cluster: 'eu'
  });

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get("/retrieve/posts")
        .then((res) => {
            console.log(res.data)
            setPostsData(res.data)
        });
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
        });
    }, [])

    useEffect(() => {
        syncFeed()
    }, []);

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
