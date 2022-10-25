import  { useState } from "react"
import axios from "axios"
import './App.css';

function App() {
  const [response, setResponse] = useState("Once in a while, eat some sweets you used to enjoy when you were younger.")

  const fetchAdvice = (e) => {
    e.preventDefault()
    axios.get("	https://api.adviceslip.com/advice").then((res) => setResponse(res.data.slip.advice)).catch((err) => setResponse("error!, Please check the link provided"))

  }
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{response}</h1>
        <button onClick={(e) => fetchAdvice(e)} className="button"><span>Advice</span></button>
      </div>
    </div>
  );
}

export default App;
