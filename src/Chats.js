import React from 'react';
import './Chats.css';
import Chat from './Chat';
function Chats() {
    return (
        <div className="chats">
           <Chat 
              name="Yemini" 
              message =  "Crazy coding.."
              timestamp = "12 mn ago"
              profilePicture = "https://avatars1.githubusercontent.com/u/31940032?s=200&v=4"
           />
            <Chat 
              name="Haidara" 
              message =  "What's up ?"
              timestamp = "16 mn ago"
              profilePicture = "https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/ea9f5d30-11c0-48aa-aaa4-aa0aeb388da0/801x410_gettyimages-1191561461.jpg"
           />
            <Chat
            name = "Steve"
            message = "Well done!"
            timestamp = "19 mn ago"
            profilePicture = "https://www.dynamique-mag.com/wp-content/uploads/5f59b6514e303b69e21b0708e815982a-780x405.jpg"
            />
            
        </div>
    )
}

export default Chats
