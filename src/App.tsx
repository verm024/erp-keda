import React from "react";
import "./App.css";
import { Text, Container, Image, Button } from "./components/atoms";

function App() {
  return (
    <div className="App">
      <Container width="80%" margin="auto">
        <Text textType="b2">Hello World</Text>
        <Button>Login</Button>
        <Image
          width="100%"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
      </Container>
    </div>
  );
}

export default App;
