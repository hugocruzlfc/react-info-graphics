import React from "react";
import { Case, Default, Switch } from "./utils/Switch";

export interface IndexProps {
  goal: number;
}

const GoalLegend: React.FC<IndexProps> = ({ goal }) => {
  //   return (
  //     <div>
  //       {goal < 30
  //         ? "There is still time to reach your goal"
  //         : goal >= 30 && goal < 60
  //         ? "You are almost there"
  //         : "You have reached your goal"}
  //     </div>
  //   );
  console.log(goal);
  return (
    <Switch>
      <Case condition={goal < 30}>There is still time to reach your goal</Case>
      <Case condition={goal >= 30}>You are almost there</Case>
      <Case condition={goal >= 60}>You have reached your goal</Case>
      <Default>Make sure to set a goal!</Default>
    </Switch>
  );
};

export default GoalLegend;
