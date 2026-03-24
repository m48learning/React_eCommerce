import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLogin from "../views/Login/Login";
import Dashboard from "../views/Dashboard/Dashboard"
import Detail from "../views/Detail/Detail"


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<AppLogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;