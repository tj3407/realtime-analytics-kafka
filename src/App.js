import React from 'react';
import logo from './logo.svg';
import './App.css';

const URL = 'ws://localhost:3030'
function App() {
  const [ws, setWs] = React.useState(new WebSocket(URL));
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    ws.onopen = () => {
      console.log('connected');
    }

    ws.onmessage = (event) => {
      console.log(event.data)
      // const msg = JSON.parse(event.data);
      // console.log(msg)
      // setMessage(msg);
    }

    ws.onclose = () => {
      console.log('disconnected');
      setWs(new WebSocket(URL));
    }
  }, [])


  return (
    <div className="App">
      {/* { message && message.length ? message.map(info => {
        return (
          <div>
            {JSON.stringify(info)}
          </div>
        )
      }) : "Retrieveing message..."} */}
    </div>
  );
}

export default App;
