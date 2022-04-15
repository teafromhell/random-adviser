/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import dividerDesktop from "./images/divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [post, setPost] = useState("");
  useEffect(() => {
    setPost(JSON.parse(localStorage.getItem("advice")));
  }, []);

  async function getPost() {
    const response = await axios.get(`https://api.adviceslip.com/advice`);
    setPost(response.data.slip);
    localStorage.setItem("advice", JSON.stringify(response.data.slip));
  }

  return (
    <div className="app">
      <h5 className="app__header">ADVICE #{post.id}</h5>
      <p className="app__advice">"{post.advice}"</p>

      <div className="app__divider">
        <img src={dividerDesktop} alt="divider" style={{ width: 300 }} />
      </div>
      <div className="app__dice" onClick={getPost}>
        <img src={dice} alt="dice" style={{ width: 20, height: 20 }} />
      </div>
    </div>
  );
}

export default App;
