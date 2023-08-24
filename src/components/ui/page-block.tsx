import * as React from "react";

export const PageBlock: React.FC<React.PropsWithChildren<{ error?: boolean; noAnimate?: boolean; }>> = ({ children, error, noAnimate }) => {
  return (
    <>
      <div className={"p-2 rounded-md border shadow-md " + (error ? "bg-red-100 dark:bg-red-500 border-red-400" : "bg-background") + (!noAnimate ? " animate-in" : "")}>
        {children}
      </div>
    </>
  );
};