import { memo } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Router = memo((props: any) => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home">
        <Route index element={<Home />} />
        <Route path="user_measurement" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
