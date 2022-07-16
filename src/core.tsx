import { useEffect, useRef, useState, SyntheticEvent } from "react";
import ReactDOM from "react-dom/client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Service from "./service";
import { Count } from "./component/count";

const Services = [
  { label: "Service One" },
  { label: "Service Two" },
  { label: "Service Three" },
  { label: "Service Four" },
  { label: "Service Five" },
  { label: "Service Six" },
  { label: "Service Seven" },
];

export default function Core() {
  const [value, setValue] = useState(0);
  const serviceRef = useRef(null);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    ReactDOM.createRoot(serviceRef.current!).render(
      <Service name={Services[value].label} />
    );
  }, [value]);

  return (
    <div className="grid grid-rows-[min-content,auto] h-100vh">
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          className="bg-gray-300"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Services.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
          <Count />
        </Tabs>
        <div ref={serviceRef} className="w-full bg-yellow-200" />
      </Box>
    </div>
  );
}

const Header = () => (
  <div>
    <h1 className="relative flex justify-center items-center h-8 bg-gray-400 text-lg">
      <span className="absolute left-0 h-full m-4">Shell App</span>
      Header
    </h1>
  </div>
);
