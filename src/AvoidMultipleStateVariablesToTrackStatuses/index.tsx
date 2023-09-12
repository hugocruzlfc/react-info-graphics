import React from "react";

export interface MultipleStateProps {}

const STATUS = {
  IDLE: "IDLE",
  IS_LOADING: "IS_LOADING",
  HAS_SUCCEEDED: "HAS_SUCCEEDED",
  HAS_ERROR: "HAS_ERROR",
};

const MultipleState: React.FC<MultipleStateProps> = () => {
  //   const [isLoading, setIsLoading] = React.useState(false);
  //   const [isError, setIsError] = React.useState(false);
  //   const [hasSucceded, setHasSucceded] = React.useState(false);

  const [status, setStatus] = React.useState(STATUS.IDLE);

  return <div>Multiple States</div>;
};

export default MultipleState;
