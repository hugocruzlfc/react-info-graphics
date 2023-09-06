import React from "react";
import { match } from "ts-pattern";

export interface IndexProps {
  address: Address;
}

export interface Address {
  country: string;
  zipCode: string;
}

const AddressShippingCost: React.FC<IndexProps> = ({ address }) => {
  //   const shippingCost =
  //     address.country === "US" && address.zipCode === "40202"
  //       ? "10"
  //       : address.country === "US" && address.zipCode === "90210"
  //       ? "20"
  //       : "5";

  const shippingCost = (address: Address) =>
    match(address)
      .with({ country: "US", zipCode: "40202" }, () => "10")
      .with({ country: "US", zipCode: "90210" }, () => "20")
      .otherwise(() => "5");

  return (
    <div>
      <div>Shipping cost: {shippingCost(address)}</div>
    </div>
  );
};

export default AddressShippingCost;

//npm install ts-pattern
