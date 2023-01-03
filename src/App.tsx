import React from "react";
import "./App.css";

import { Container } from "./components/atoms";
import { Navbar, PriceCard } from "./components/molecules";
import { Home, About } from "./components/organisms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container width="80%" margin="auto">
        <Home />
        <About />
        <PriceCard
          level="basic"
          price="Rp. 99k"
          features={[
            "Feature 1",
            "Feature 21",
            "Feature 31",
            "Feature 41",
            "Feature 41",
            "Feature 41",
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
