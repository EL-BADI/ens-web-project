import React, { ReactNode } from "react";

const Center = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:max-w-7xl max-w-5xl mx-auto md:px-20 px-9">
      {children}
    </div>
  );
};

export default Center;
