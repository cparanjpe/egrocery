
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [test,setTest] = useState("");
  useEffect(() => {
    // Make an HTTP GET request to your backend
    axios.get('http://localhost:4444/test') // Replace with your actual endpoint
      .then((response) => {
        // Assuming the response has a "msg" property
        console.log(response);
        setTest(response.data.msg);
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h2>Test heading{test}</h2>
        
      </header>
    </div>
  );
}

export default App;
