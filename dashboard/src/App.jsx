import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import OptVerify from "../pages/OptVerify";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EmailVerify from "../pages/EmailVerify";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/emailVerify/:token" element={<EmailVerify />} />
        <Route path="/optVerify/:email" element={<OptVerify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
