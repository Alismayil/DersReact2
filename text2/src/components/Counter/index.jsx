import { useState } from "react";

const Counter = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [netice, setNetice] = useState(0);

  const handleTopla = (e) => {
    e.preventDefault();
    if (num1 && num2) {
      let data = parseInt(num1) + parseInt(num2);
      setNetice(data);
    }
  };
  const handleCix = (e) => {
    e.preventDefault();
    if (num1 && num2) {
      let data = parseInt(num1) - parseInt(num2);
      setNetice(data);
    }
  };
  const handleVur = (e) => {
    e.preventDefault();
    if (num1 && num2) {
      let data = parseInt(num1) * parseInt(num2);
      setNetice(data);
    }
  };
  const handleBol = (e) => {
    e.preventDefault();
    if (num1 && num2) {
      let data = parseInt(num1) / parseInt(num2);
      setNetice(data);
    }
  };
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={(e) => setNum1(e.target.value)} />
          <input type="text" onChange={(e) => setNum2(e.target.value)} />

          <input type="text" value={netice}></input>
          <button onClick={handleTopla}>Topla</button>
          <button onClick={handleCix}>Cix</button>
          <button onClick={handleVur}>Vur</button>
          <button onClick={handleBol}>Bol</button>
        </header>
      </div>
    </div>
  );
};

export default Counter;
