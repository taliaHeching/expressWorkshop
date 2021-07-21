import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:8000')
        const { data } = await res.json();
        setMessage(data)
      } catch (error) {
        console.error('error: ', error);
      }
    })();
  }, []);

  return (
    <div className="App">
      {message &&
        <div className="message">
          {message}
        </div>}
    </div>
  );
}

export default App;
