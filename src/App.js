import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Mobile } from "./Components/Pages/Mobile";
import { True5G } from "./Components/Pages/True5G";
import { JioFiber } from "./Components/Pages/JioFiber";
import { AirFiber } from "./Components/Pages/AirFiber";
import { Business } from "./Components/Pages/Business";
import { Devices } from "./Components/Pages/Devices";
import { Apps } from "./Components/Pages/Apps";
import { Support } from "./Components/Pages/Support";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/true5g" element={<True5G />} />
          <Route path="/jiofiber" element={<JioFiber />} />
          <Route path="/airfiber" element={<AirFiber />} />
          <Route path="/business" element={<Business />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </>
  )
}