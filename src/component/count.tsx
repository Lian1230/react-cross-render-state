import { Button } from "@mui/material";
import { startTransition, useEffect } from "react";
import { useCount } from "../count-context";

const cpuIntensiveTask = () => {
  let count = 0;
  while (count < 1000000000) {
    count++;
  }
};

export const Count = () => {
  const [count, inc] = useCount();

  const handleClick = () => {
    startTransition(inc);
  };

  useEffect(() => {
    cpuIntensiveTask();
  }, [count]);

  return (
    <div className="grid justify-items-center w-max self-center mt-4">
      <p>Count: {count}</p>
      <Button variant="contained" size="small" onClick={handleClick}>
        Add Count
      </Button>
    </div>
  );
};
