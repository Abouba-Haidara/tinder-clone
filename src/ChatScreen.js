import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
const [message, setMessage] = useState([
    {
        name: 'abouba',
        message: 'col',
        urlImage: '...'
    },
     {
          name: 'abouba',
         message: 'col it work',
         urlImage: '...'
     },

      {
          name: 'abouba',
          message: 'col good job',
          urlImage: '...'
      }

])


    return (
        <div className="chatScreen">
            <Avatar className="chat__image" alt="" src='https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/ea9f5d30-11c0-48aa-aaa4-aa0aeb388da0/801x410_gettyimages-1191561461.jpg' /> 
            it work
        </div>
    )
}

export default ChatScreen
