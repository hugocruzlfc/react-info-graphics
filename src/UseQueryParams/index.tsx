import React, { useState, useEffect } from "react";
import {
  useQueryParams,
  QueryParamProvider,
  StringParam,
} from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

export default function UseQueryParams() {
  const [searchParam, setSearchParam] = useQueryParams({ search: StringParam });
  const [searchVal, setSearchVal] = useState(searchParam?.search || "");

  useEffect(() => {
    if (searchVal) {
      setSearchParam({ search: searchVal }, "push");
    }
  }, [searchVal, setSearchParam]);

  return (
    <input
      value={searchVal}
      onChange={(e) => setSearchVal(e.target.value)}
    />
  );
}
