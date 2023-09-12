import React from "react";
export default function CleanIfStatements() {
  const canUserPlaceOrderOriginal = (payment: any, product: any) => {
    let canPlaceOrder = false;
    if (product.hasStock === true) {
      if (payment.processed === true) {
        if (payment.canPay === true) {
          canPlaceOrder = true;
        } else {
          canPlaceOrder = false;
        }
      } else {
        canPlaceOrder = false;
      }
    }
    return canPlaceOrder;
  };

  const canUserPlaceOrderRefactorOne = (payment: any, product: any) => {
    if (product.hasStock === true) {
      if (payment.processed === true) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  const canUserPlaceOrderRefactorTwo = (payment: any, product: any) => {
    if (product.hasStock === false) {
      return false;
    } else if (payment.processed === true) {
      return true;
    }
  };

  const canUserPlaceOrderRefactorThree = (payment: any, product: any) => {
    if (product.hasStock === true && payment.processed === true) {
      return true;
    }
    return false;
  };

  const canUserPlaceOrderRefactorFour = (payment: any, product: any) => {
    if (product.hasStock && payment.processed) {
      return true;
    }
    return false;
  };

  const canUserPlaceOrderRefactorFive = (payment: any, product: any) => {
    return product.hasStock && payment.processed;
  };

  const canUserPlaceOrderRefactorSix = (
    { processed }: { processed: boolean },
    { hasStock }: { hasStock: boolean }
  ) => processed && hasStock;

  return (
    <div>
      <h2>Inside my code is the examples!!!👋</h2>
    </div>
  );
}
