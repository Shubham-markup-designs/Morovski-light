import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import ForgotPassword from "../modules/auth/pages/ForgotPassword";
import { EmailSent } from "../modules/auth/pages/EmailSent";
import ResetPassword from "../modules/auth/pages/ResetPassword";

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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
