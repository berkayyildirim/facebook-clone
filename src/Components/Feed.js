import React from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

const Feed = () => {
    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
        
        <Post 
            profilePic="https://avatars.githubusercontent.com/u/54432776?v=4"
            message="yoo this is a message"
            timestamp="time"
            imgName="imgName"
            username="Berkay"
        />
        
        {/* {
            postsData.map(entry => (
                <Post
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timesstamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            ))
        }   */}

        </div>
    )
}

export default Feed
