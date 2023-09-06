// Infinite loop in useEffect
import { useState, useEffect } from "react";

export const MistakeThree = () => {
  //const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  //   useEffect(() => {
  //     setCount(count + 1);
  //   }, [count, value]);

  const count = value + 1;

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      />
      Count is {count}
    </div>
  );
};
