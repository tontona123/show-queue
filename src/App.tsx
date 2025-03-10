import React from "react";
import "./index.css";
import EduRules from "./components/rules";
import Edupractice from "./components/self-practice";
import Eduwork from "./components/request-work";
import Eduborrowing from "./components/borrowing";

const App = () => {
  return (
    <div>
      <h1>Welcome to My Project</h1>
      <p>This is the original version of App.tsx.</p>
      <EduRules/>
      <Edupractice/>
      <Eduwork/>
      <Eduborrowing/>
    </div>
  );
};

export default App;