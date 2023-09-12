import React, { createContext, useContext, useState } from "react";
import { Button, Footer, Item, List } from "../components/Components";

export type DropdownContextProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropdownContext = createContext<DropdownContextProp | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownContextProvider"
    );
  }
  return context;
}
export function Dropdown({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
Dropdown.Footer = Footer;
