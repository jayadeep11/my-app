import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("NothingOverHere");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  // TODO: add functionality
  const generatePassword = useCallback(() => {
    let pass = "";
    let ind = 0;
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (charAllowed) chars += "*!@#$%^&*()";
    if (numAllowed) chars += "0123456789";

    for (let i = 0; i < length; i++) {
      ind = Math.floor(Math.random() * chars.length);
      chars = shuffleString(chars);
      pass += chars[ind];
    }
    setPassword(pass);
  });

  function shuffleString(str) {
    const chars = str.split("");

    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    return chars.join("");
  }

  useEffect(() => {
    generatePassword();
    setIsCopy(false);
  }, [length, charAllowed, numAllowed]);

  const passwdRef = useRef(null);

  function copyToClipBoard() {
    window.navigator.clipboard.writeText(password);
    setIsCopy(true);
    passwdRef.current.select();
  }

  return (
    <div className="main  flex flex-col gap-20 sm:gap-32 justify-center items-center">
      <h1 className="font-medium text-center text-4xl sm:text-6xl ">
        Password Generator
      </h1>

      {/* this if for input and copy button */}
      <div className="grid grid-cols-1 gap-5  sm:gap-0 sm:text-2xl sm:grid-cols-12 ">
        <input
          type="text"
          className="input-copy-text sm:col-span-10  bg-transparent p-3 rounded sm:rounded-l-xl border text-slate-500 sm:border-r-transparent border-slate-500  outline-none"
          placeholder="Enter your password"
          readOnly
          value={password}
          ref={passwdRef}
        />
        <button
          className="bg-teal-900 rounded sm:col-span-2 border sm:rounded-r-xl p-3 sm:border-l-transparent sm:text-3xl border-slate-500"
          type="button"
          onClick={copyToClipBoard}
        >
          {isCopy ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* this if for length input */}

      <div className="grid sm:grid-cols-3 text-md sm:text-2xl sm:gap-y-32 justify-center  items-center gap-10">
        <div className=" flex justify-center items-center flex-col gap-2 p-2">
          <label className=""> Length : {length}</label>
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
        </div>

        <div className=" flex justify-center gap-2 p-2">
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
          <label>Chars</label>
        </div>
        <div className="flex justify-center gap-2">
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
          <label>Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
