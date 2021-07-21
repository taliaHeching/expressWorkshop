import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:8000')
        const { data } = res.json();
        console.log(data);
      } catch (error) {
        console.error('error: ', error);
      }
    })();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
