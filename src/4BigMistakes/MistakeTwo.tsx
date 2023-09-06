//Missing default value for the state
import { useState } from "react";

export const MistakeTwo = () => {
  //const [firstName, userFirstName] = useState();
  const [firstName, userFirstName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(event) => userFirstName(event.target.value)}
      />
    </div>
  );
};
