import React from 'react'
import Story from './Story'
import "./StoryReel.css";
import { useStateValue } from "../StateProvider";
function StoryReel() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story
            image={user.photoURL}
            profileSrc={user.photoURL}
            title={user.displayName}
            />

             <Story
            image="https://mumbaimirror.indiatimes.com/photo/75369337.cms"
            profileSrc="https://in.bmscdn.com/iedb/artist/images/website/poster/large/arijit-singh-1048083-24-03-2017-18-02-00.jpg?1"
            title="Arijit Singh"
            />
             <Story
            image="https://i.pinimg.com/originals/01/4a/0f/014a0fc6de7133a3e1e67be65fda5c44.jpg"
            profileSrc="https://i.pinimg.com/originals/9e/11/ee/9e11eeb32cd8bb9021a420c1a36c84eb.jpg"
            title="Peaky Blinders"
            />
             <Story
            image="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/HeathJoker.png/220px-HeathJoker.png"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/e/ea/Heath_Ledger_%282%29.jpg"
            title="Joker"
            />
             <Story 
            image="https://im.indiatimes.in/content/2020/Aug/1272086-1280x720_5f4615eaeb661.jpg?w=725&h=407"
            profileSrc="https://img1.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg"
            title="Professor"
            />
        </div>
    )
}

export default StoryReel
