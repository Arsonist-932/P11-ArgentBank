import { BrowserRouter, Route, Routes } from "react-router-dom";

// IMPORT PAGES
import "./style/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
