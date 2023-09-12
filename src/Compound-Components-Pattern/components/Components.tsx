import React, { ReactNode, useContext } from "react";
import {
  DropdownContext,
  useDropdownContext,
} from "../context/dropdownContext";

interface Props {
  children?: ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  return (
    <button onClick={() => setIsOpen((currState) => !currState)}>
      {children}
      {isOpen ? "Open" : "Closed"}
    </button>
  );
};

export const List = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  return <li>{children}</li>;
};
export const Item = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  return <li>{children}</li>;
};
export const Footer = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useDropdownContext();

  return <div>{children}</div>;
};
