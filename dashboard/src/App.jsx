import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import OptVerify from "../pages/OptVerify";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EmailVerify from "../pages/EmailVerify";
import AddCategory from "../pages/AddCategory";
import AddSubCategory from "../pages/AddSubCategory";
import ViewCategory from "../pages/ViewCategory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/emailVerify/:token" element={<EmailVerify />} />
        <Route path="/optVerify/:email" element={<OptVerify />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="addsubcategory" element={<AddSubCategory />} />
          <Route path="viewcategory" element={<ViewCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
