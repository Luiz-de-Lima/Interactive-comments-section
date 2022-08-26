import { useState } from "react";
import Logo from "./assets/favicon-32x32.png";
import "./App.scss";
import { CardInteractive } from "./components/CardIteractive";
import { AddComment } from "./components/AddComment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CardInteractive />
      <AddComment />
    </div>
  );
}

export default App;
