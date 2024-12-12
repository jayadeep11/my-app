import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("NothingOverHere");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);

  // TODO: add functionality
  const generatePassword = useCallback(() => {
    console.log("Todo");
  });

  useEffect(() => {
    generatePassword();
  }, []);

  const passwdRef = useRef(null);

  // TODO: copy functionality
  function copyToClipBoard() {
    console.log("Copied!");
  }

  return (
    <div className="main  flex flex-col gap-20 justify-center">
      <h1 className="text-2xl font-medium text-center md:text-6xl ">
        Password Generator
      </h1>

      {/* this if for input and copy button */}
      <div className="flex justify-center">
        <input
          type="text"
          className="input-copy-text p-3 bg-transparent rounded-l-xl border text-gray-900 border-r-transparent border-slate-500  text-4xl outline-none"
          placeholder="Enter your password"
          readOnly
          value={password}
          ref={passwdRef}
        />
        <button
          className="bg-teal-900 p-4 border rounded-r-xl border-l-transparent text-4xl border-slate-500"
          type="button"
          onClick={copyToClipBoard}
        >
          Copy
        </button>
      </div>

      {/* this if for length input */}

      <div className="flex justify-center gap-20 ">
        <div className="flex gap-3 justify-center">
          <input
            type="range"
            name=""
            value={length}
            min={6}
            max={80}
            className="range-input "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label forHtml="slider">Length : {length}</label>
        </div>

        <div className="flex gap-3 justify-center">
          <input
            type="checkbox"
            name=""
            value={length}
            className="range-input "
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label forHtml="chars">Chars</label>
        </div>
        <div className="flex gap-3 justify-center">
          <input
            type="checkbox"
            name=""
            value={length}
            className="range-input "
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label forHtml="nums">Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
