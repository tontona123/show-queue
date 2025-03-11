import React from "react";
import QueueDisplay from "./components/QueueDisplay";
import QueueDisplay2 from "./components/QueueDisplay2";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <QueueDisplay />
      <QueueDisplay2 />
    </div>
  );
}

export default App;
