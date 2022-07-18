import { FC, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Count } from "./component/count";
import { CountProvider, useCount } from "./count-context";

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
  const countContextValue = useCount();
  const serviceRef = useRef(null);

  useEffect(() => {
    ReactDOM.createRoot(serviceRef.current!).render(
      <CountProvider contextValue={countContextValue}>
        <Service name={Services[serviceIdx].label} />
      </CountProvider>
    );
  }, [serviceIdx, countContextValue]);

  return <div ref={serviceRef} className="w-full bg-yellow-200" />;
};

const Service: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-full mx-6 my-2">
      <h1 className="text-xl">{name}</h1>
      <Count />
    </div>
  );
};
