import React from "react";

const countryList = ["United States", "Senegal", "Canada"];

export interface SlowListProps {
  search: string;
}

const SlowList: React.FC<SlowListProps> = ({ search }) => {
  const now = performance.now();
  while (performance.now() - now < 40) {
    // Artificial delay -- do nothing for 40ms
  }
  return countryList.filter((el) => el.indexOf(search) >= 0);
};

export default SlowList;
