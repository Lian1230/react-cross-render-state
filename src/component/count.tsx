import { Button } from "@mui/material";
import { useCount } from "../count-context";

export const Count = () => {
  const [count, setCount] = useCount();

  return (
    <div className="grid justify-items-center w-max self-center mt-4">
      <p>Count: {count}</p>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Add Count
      </Button>
    </div>
  );
};
