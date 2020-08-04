import React from 'react';
import socketIOClient from "socket.io-client";

const URL = 'ws://localhost:5000'
function App() {
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    const socket = socketIOClient(URL);
    socket.on('message', data => {
      console.log(data)
      setMessage(data);
    })
  }, [])


  return (
    <div className="App">
      { (message !== null && message.length > 0) ? message.map((info, index) => {
        return (
          <div key={index}>
            {JSON.stringify(info)}
          </div>
        )
      }) : "Retrieving message..."}
    </div>
  );
}

export default App;
