import { createContext, FC, ReactElement, useContext, useState } from "react";

type CountContextState = [number, () => void];

const CountContext = createContext<CountContextState>([0, () => null]);

export const CountProvider: FC<{
  children: ReactElement;
  contextValue?: CountContextState;
}> = ({ children, contextValue }) => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((prev) => prev + 1);

  return (
    <CountContext.Provider value={contextValue || [count, inc]}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
