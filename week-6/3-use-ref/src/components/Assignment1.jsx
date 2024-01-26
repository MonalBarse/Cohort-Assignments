import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button.
// When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const [input, setInput] = useState("");
  const inputEl = useRef(null); // null is the initial value of the ref then it will be the input element
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleButtonClick = () => {
    alert(`Hi There ${input}`);
    setInput("");
    inputEl.current.focus();
  };

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        placeholder="Enter text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
