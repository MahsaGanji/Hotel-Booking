/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/Allrooms";

const App = () => {
  const isOwnwrPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnwrPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
