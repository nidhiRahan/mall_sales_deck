import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Sponsorship from "./pages/Sponsorship";
import Leasing from "./pages/Leasing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/sponsorship" element={<Sponsorship />} />
      <Route path="/leasing" element={<Leasing />} />
    </Routes>
  );
}

export default App;