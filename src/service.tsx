import { FC } from "react";
import { Count } from "./component/count";

const Service: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="w-full mx-6 my-2">
      <h1 className="text-xl">{name}</h1>
      <Count />
    </div>
  );
};

export default Service;
