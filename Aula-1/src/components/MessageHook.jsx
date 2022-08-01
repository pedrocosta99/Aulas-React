import React, {useState} from "react";

const Message = props => {
  const {user} = props
  let msg1 = 'Welcome'
  let msg2 = "Thanks for subscribing"
  const [message, setMessage] = useState(msg1)

  return (
    <div>
      <h1>Hello {user}</h1>
      <h2>{message}</h2>
      <button onClick={() => setMessage(message == msg1 ? msg2 : msg1)}>
        Subscribe
      </button>
    </div>
  )
}

export default Message
