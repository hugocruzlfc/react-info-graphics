import React from "react";

export interface ButtonBaseProps {
  className?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  className,
  as,
  children,
  ...restProps
}) => {
  const Element = as || "button";
  return (
    <Element
      {...restProps}
      className={className}
    >
      {children}
    </Element>
  );
};

export default ButtonBase;
