import React from "react";

import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Random Photo Generator Mk.2 </h1>
      </header>
      {/* <Gallery /> */}
      <img
        src="https://i.picsum.photos/id/776/200/300.jpg?hmac=BQHDuDGwB4rDL14FA6htzvzuvc0JcKn24gd4on7tp1M"
        alt=""
      />
    </div>
  );
}

export default App;
