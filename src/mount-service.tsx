import { FC, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { CountProvider, useCount } from "./count-context";
import Service from "./service";

export const Services = [
  { label: "Service One" },
  { label: "Service Two" },
  { label: "Service Three" },
  { label: "Service Four" },
  { label: "Service Five" },
  { label: "Service Six" },
  { label: "Service Seven" },
];

export const MountService: FC<{ serviceIdx: number }> = ({ serviceIdx }) => {
  // const countContextValue = useCount();
  const serviceRef = useRef(null);

  useEffect(() => {
    ReactDOM.createRoot(serviceRef.current!).render(
      // <CountProvider contextValue={countContextValue}>
      <Service name={Services[serviceIdx].label} />
      // </CountProvider>
    );
  }, [
    // countContextValue,
    serviceIdx,
  ]);

  return <div ref={serviceRef} className="w-full bg-yellow-200" />;
};
