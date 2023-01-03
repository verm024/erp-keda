import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoutes from "./routes/GlobalRoutes";

import { Container } from "./components/atoms";
import { Navbar, Footer } from "./components/molecules";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container width="100%">
          <GlobalRoutes />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
