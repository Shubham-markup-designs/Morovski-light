import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";

const MainWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const AuthWrapper = () => (
  <AuthLayout>
    <Outlet />
  </AuthLayout>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout Routes */}
        <Route element={<MainWrapper />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Auth Layout Routes */}
        <Route element={<AuthWrapper />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;