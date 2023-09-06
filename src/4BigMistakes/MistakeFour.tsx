// Mutate an existing state object
import { useState, useEffect } from "react";

export const MistakeThree = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const userAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This is wrong
    // user.age = e.target.value;
    //setUser(user);

    //this is correct
    const newUser = { ...user, age: e.target.value };
    setUser(newUser);
  };

  return (
    <div>
      <input onChange={userAgeChange} />
    </div>
  );
};
