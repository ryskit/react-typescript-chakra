import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router = memo((props: any) => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home">
        <Route
          index
          element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          }
        />
        <Route
          path="user_measurement"
          element={
            <HeaderLayout>
              <UserManagement />
            </HeaderLayout>
          }
        />
        <Route
          path="setting"
          element={
            <HeaderLayout>
              <Setting />
            </HeaderLayout>
          }
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
