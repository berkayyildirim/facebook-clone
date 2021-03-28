import React from 'react'
import Story from "./Story"
import "./StoryReel.css"

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                    image="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                    profileSrc="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                    title="Sonny Sangha"
            />
            <Story 
                    image="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                    profileSrc="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                    title="Sigmund Daniel"
            />
            <Story 
                    image="https://images.unsplash.com/photo-1542384701-c0e46e0eda04?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                    profileSrc="https://images.unsplash.com/profile-fb-1504633971-1045a854a4d3.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    title="Robin Noguier"
            />
        </div>
    )
}

export default StoryReel
