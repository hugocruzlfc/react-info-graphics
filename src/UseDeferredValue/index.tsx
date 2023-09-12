import React, { useState, useDeferredValue } from "react";
import SlowList from "./SlowList";

export default function IndexPage() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onSearch}
        value={search}
      />
      {/* <SlowList search={search} /> */}
      <SlowList search={deferredSearch} />
    </div>
  );
}
