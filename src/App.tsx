import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "./components/common/carousel/Carousel";

function App() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const resources = require.context("./assets/images", true);
    setImages(resources.keys().map((key) => resources(key)));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Carousel images={images} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
