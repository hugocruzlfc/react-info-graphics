import React, { Children, ReactNode, isValidElement } from "react";

export interface SwitchProps {
  children: React.ReactNode;
}

export interface CaseProps {
  condition: boolean;
  children: ReactNode;
}

export interface DefaultProps {
  children: ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  let matchChild: ReactNode | null = null;
  let defaultCase: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (!matchChild && isValidElement(child) && child.type === Case) {
      const caseElement = child as React.ReactElement<CaseProps>;
      const { condition } = caseElement.props;
      const conditionResult = Boolean(condition);
      if (conditionResult) {
        matchChild = caseElement;
      }
    } else if (
      !defaultCase &&
      isValidElement(child) &&
      child.type === "Default"
    ) {
      console.log("ji");
      defaultCase = child as React.ReactElement<DefaultProps>;
    }
  });

  return matchChild ?? defaultCase ?? null;
};

export const Case: React.FC<CaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const Default: React.FC<DefaultProps> = ({ children }) => {
  return <>{children}</>;
};
