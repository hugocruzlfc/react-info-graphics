import React, { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
  ref: RefObject<T | null>
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const Modal = ({
  children,
  modalRef,
}: {
  children: React.ReactNode;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  return <div ref={modalRef}>{children}</div>;
};

export default function Used() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    console.log("close modal");
  };

  useOutsideClick(() => {
    console.log("You clicked outside of me!");
    closeModal();
  }, modalRef);

  return <Modal modalRef={modalRef}>Modal</Modal>;
}
