import React from "react";
import "./App.css";

import { Container } from "./components/atoms";
import { Navbar } from "./components/molecules";
import { Home, About, Pricing, Contact } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container width="100%">
        <Home />
        <About />
        <Pricing />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
