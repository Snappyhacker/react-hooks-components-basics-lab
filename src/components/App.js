import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import Home from "./Home"; // Assuming Home is in the same directory

const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <About />
    </div>
  );
}

export default App;
