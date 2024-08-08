import { useState } from "react";

export function Square() {
  const [value, setValue] = useState("");

  function handlePlay() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handlePlay}>
      {value}
    </button>
  );
}
