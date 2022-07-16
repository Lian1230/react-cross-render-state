import {
  Context,
  createContext,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

declare global {
  interface Window {
    _CountContext_: Context<CountContextState>;
  }
}

type CountContextState = [number, Dispatch<SetStateAction<number>>];

// const getContext = () => {
//   window._CountContext_ =
//     window._CountContext_ || createContext<CountContextState>([0, () => null]);
//   return window._CountContext_;
// };

// const CountContext = getContext();
const CountContext = createContext<CountContextState>([0, () => null]);

export const CountProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};

// export const useCount = () => useContext(getContext());
export const useCount = () => useContext(CountContext);
