import React, { ReactNode } from "react";

const Center = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:max-w-7xl max-w-3xl mx-auto md:px-20 px-3">
      {children}
    </div>
  );
};

export default Center;
