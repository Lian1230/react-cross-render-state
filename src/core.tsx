import { useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Count } from "./component/count";
import { MountService, Services } from "./mount-service";

export default function Core() {
  const [currentServiceIdx, setCurrentServiceIdx] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setCurrentServiceIdx(newValue);
  };

  return (
    <div className="grid grid-rows-[min-content,auto] h-100vh">
      <Header />
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          className="bg-gray-300"
          orientation="vertical"
          variant="scrollable"
          value={currentServiceIdx}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Services.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
          <Count />
        </Tabs>
        <MountService serviceIdx={currentServiceIdx} />
      </Box>
    </div>
  );
}

const Header = () => (
  <div>
    <h1 className="relative flex justify-center items-center h-8 bg-gray-400 text-lg">
      <span className="absolute left-0 h-full m-4">Shell App (core)</span>
      Header
    </h1>
  </div>
);
