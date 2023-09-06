//Forgetting that useSate is asynchronous

import { useState } from "react";

export const MistakeOne = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, age: e.target.value }));

    /// This is wrong
    // const isAdult = +user.age >= 18;
  };

  // Instead either perform the calculation in render or use the value from event
  const isAdult = +user.age >= 18;

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={onChange}
      />
    </div>
  );
};
