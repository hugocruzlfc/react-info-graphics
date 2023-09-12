import React from "react";
import ButtonBase from "./ButtonBase";

const mapSolidVariants = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-gray-500 hover:bg-gray-600",
};

export interface ButtonSolidProps {
  variant: keyof typeof mapSolidVariants;
  label: string;
}

const ButtonSolid: React.FC<ButtonSolidProps> = ({
  variant,
  label,
  ...restProps
}) => {
  return (
    <ButtonBase
      {...restProps}
      className={mapSolidVariants[variant]}
    >
      {label}
    </ButtonBase>
  );
};

export default ButtonSolid;
