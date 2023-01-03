import React from "react";
import "./App.css";

import { Container } from "./components/atoms";
import { Navbar } from "./components/molecules";
import { Home, About } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container width="80%" margin="auto">
        <Home />
        <About />
      </Container>
    </div>
  );
}

export default App;
