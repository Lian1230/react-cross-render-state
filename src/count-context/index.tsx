import {
  createContext,
  FC,
  ReactElement, useCallback, useContext, useEffect, useState
} from "react";

type CountContextState = [number, () => void];

type Listener = () => void;

const CountContext = createContext<CountContextState>([0, () => null]);

export const CountProvider: FC<{
  children: ReactElement;
  contextValue?: CountContextState;
}> = ({ children, contextValue }) => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((prev) => prev + 1);

  // const value = contextValue || [count, inc];

  return (
    <CountContext.Provider value={[count, inc]}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);

// const createExternalStore = <S,>(initialState: S) => {
//   let state = initialState;
//   const getState = () => state;
//   const listeners = new Set<Listener>();
//   const setState = (fn: (s: S) => S) => {
//     state = fn(state);
//     listeners.forEach((l) => l());
//   };
//   const subscribe = (listener: Listener) => {
//     listeners.add(listener);
//     return () => {
//       listeners.delete(listener);
//     };
//   };
//   return { getState, setState, subscribe };
// };

// const store = createExternalStore({ count: 0 });

// export const useCount = (): [number, () => void] => {
//   const [count, setCount] = useState(() => store.getState().count);
//   useEffect(() => {
//     const callback = () => setCount(store.getState().count);
//     const unsubscribe = store.subscribe(callback);
//     callback();
//     return unsubscribe;
//   }, []);

//   const inc = useCallback(() => {
//     store.setState((prev) => ({ count: prev.count + 1 }));
//   }, []);

//   return [count, inc];
// };
