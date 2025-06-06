import React, { ReactNode } from "react";

const EcommerceLayout = ({
  children,
  product,
}: {
  children: ReactNode;
  product: ReactNode;
}) => {
  return (
    <div>
      {children}
      {product}
    </div>
  );
};

export default EcommerceLayout;
