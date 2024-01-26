import React, { useState, useCallback } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [forceRender, setforceRender] = useState(0);
  const reference = useRef(0);
  reference.current += 1;
  /*  const handleReRender = useCallback(() => {
    setforceRender(forceRender + 1);
  }, [forceRender]); */
  function handleReRender() {
    setforceRender(forceRender + 1);
  }

  return (
    <div>
      <p>This component has rendered {reference.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
