import React from "react";
import "./App.css";
import { Text, Container } from "./components/atoms";

function App() {
  return (
    <div className="App">
      <Container width="80%" margin="auto">
        <Text textType="b2">Hello World</Text>
      </Container>
    </div>
  );
}

export default App;
