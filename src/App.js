import { useState } from "react";

function App() {
  const [val, setValue] = useState("");

  const clear = () => {
    setValue("");
  };

  const backspace = () => {
    setValue(val.slice(0, -1));
  };

  const evaluate = () => {
    setValue(eval(val));
  };
  
  return (
    <>
      <div className="container">
        <div className="cover">
          <div className="form">
            <input type="text" value={val} placeholder="0" />
          </div>
          <div className="buttons">
            <div className="one-row">
              <button type="number" value="ac" onClick={() => clear()}>
                AC
              </button>
              <button type="number" value="X" onClick={() => backspace()}>
                X
              </button>
              <button
                type="number"
                value="%"
                onClick={(e) => setValue(val + e.target.value)}
              >
                %
              </button>
              <button
                type="number"
                value="/"
                onClick={(e) => setValue(val + e.target.value)}
              >
                /
              </button>
            </div>
            <div className="one-row">
              <button
                type="number"
                value="7"
                onClick={(e) => setValue(val + e.target.value)}
              >
                7
              </button>
              <button
                type="number"
                value="8"
                onClick={(e) => setValue(val + e.target.value)}
              >
                8
              </button>
              <button
                type="number"
                value="9"
                onClick={(e) => setValue(val + e.target.value)}
              >
                9
              </button>
              <button
                type="number"
                value="*"
                onClick={(e) => setValue(val + e.target.value)}
              >
                *
              </button>
            </div>
            <div className="one-row">
              <button
                type="number"
                value="4"
                onClick={(e) => setValue(val + e.target.value)}
              >
                4
              </button>
              <button
                type="number"
                value="5"
                onClick={(e) => setValue(val + e.target.value)}
              >
                5
              </button>
              <button
                type="number"
                value="6"
                onClick={(e) => setValue(val + e.target.value)}
              >
                6
              </button>
              <button
                type="number"
                value="-"
                onClick={(e) => setValue(val + e.target.value)}
              >
                -
              </button>
            </div>
            <div className="one-row">
              <button
                type="number"
                value="1"
                onClick={(e) => setValue(val + e.target.value)}
              >
                1
              </button>
              <button
                type="number"
                value="2"
                onClick={(e) => setValue(val + e.target.value)}
              >
                2
              </button>
              <button
                type="number"
                value="3"
                onClick={(e) => setValue(val + e.target.value)}
              >
                3
              </button>
              <button
                type="number"
                value="+"
                onClick={(e) => setValue(val + e.target.value)}
              >
                +
              </button>
            </div>
            <div className="one-row">
              <button
                type="number"
                value="0"
                onClick={(e) => setValue(val + e.target.value)}
              >
                0
              </button>
              <button
                type="number"
                value="."
                onClick={(e) => setValue(val + e.target.value)}
              >
                .
              </button>
              <button type="number" value="=" onClick={() => evaluate()}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
