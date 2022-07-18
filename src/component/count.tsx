import { Button } from "@mui/material";
import { useCount } from "../count-context";

export const Count = () => {
  const [count, inc] = useCount();

  return (
    <div className="grid justify-items-center w-max self-center mt-4">
      <p>Count: {count}</p>
      <Button variant="contained" size="small" onClick={inc}>
        Add Count
      </Button>
    </div>
  );
};
