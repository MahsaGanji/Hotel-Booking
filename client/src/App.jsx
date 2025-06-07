/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const isOwnwrPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnwrPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
