import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
    {
        name: 'Abouba',
        message: 'col....!',
        urlImage: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/ea9f5d30-11c0-48aa-aaa4-aa0aeb388da0/801x410_gettyimages-1191561461.jpg'
    },
     {
         name: 'Abouba',
         message: 'col it work!!!',
         urlImage: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/ea9f5d30-11c0-48aa-aaa4-aa0aeb388da0/801x410_gettyimages-1191561461.jpg'
     },

      {
          message: 'col good job!! lovely',
      }

])


    const handleSend = e =>{
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");

    }
    return (
        <div className="chatScreen">
            <p className = "chatScreen__timestamp" > Matching avec Abouba  20/08/2020</p>
            {messages.map(message=>(
                message.name ? (
                <div className="chatScreen__message">
                     <Avatar 
                        className="chatScreen__image" 
                        alt={message.name} 
                        src={message.urlImage}
                      /> 
                     <p className="chatScreen__text" >{message.message}</p>
                </div>
                ) :
                (
                    <div className="chatScreen__message">
                     <p className="chatScreen__textUser" >{message.message}</p>
                </div>
                )
            ))
            }
         <form className = "chatScreen__input" >
             <input 
              value = {input}
              onChange ={(e)=>setInput(e.target.value)}
              type="text"
              className="chatScreen__field" 
              placeholder="Saisir votre message...."/>
             <button type="submit" onClick={handleSend} className="chatScreen__inputButton"> Envoyer </button>
          </form>
        </div>
    )
}

export default ChatScreen
