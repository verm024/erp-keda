import React from "react";
import "./App.css";

import { Container, Textarea } from "./components/atoms";
import { Navbar } from "./components/molecules";
import { Home, About, Pricing } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container width="100%">
        <Home />
        <About />
        <Pricing />
      </Container>
    </div>
  );
}

export default App;
