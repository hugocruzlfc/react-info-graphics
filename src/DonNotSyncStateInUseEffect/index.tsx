import React, { useEffect, useState } from "react";

const UseForm = () => {
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [isValid, setIsValid] = useState(false);

  //useEffect should not be used to sync state local
  //   useEffect(() => {
  //     if (isYearOfBirthValid(yearOfBirth)) {
  //       setIsValid(true);
  //     } else {
  //       setIsValid(false);
  //     }
  //   }, [yearOfBirth]);

  const isYearOfBirthValid = (yearOfBirth: string) => {
    const currentYear = new Date().getFullYear();
    const yearOfBirthInt = parseInt(yearOfBirth);
    if (yearOfBirthInt > 1900 && yearOfBirthInt <= currentYear) {
      return true;
    }
    return false;
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearOfBirth(e.target.value);
    if (isYearOfBirthValid(yearOfBirth)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form>
      <label htmlFor="input">Year of birth</label>
      <br />
      <input
        type="text"
        id="input"
        value={yearOfBirth}
        onChange={onInputChange}
      />
    </form>
  );
};

export default UseForm;
