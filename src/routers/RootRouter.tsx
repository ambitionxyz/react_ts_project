import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  PublicLayout,
  SuspenseComponent,
  PublicNotFound,
} from "../../src/components";
import LoginPage from "../../src/pages/login/LoginPage";
import { ROUTER_PATH } from "../../src/constants/routers/constans";
import DashBoardPage from "../pages/common/Dashboard/dashboard";

const RootRouters: React.FC = () => {
  return (
    <SuspenseComponent>
      <NavigateRouter />
    </SuspenseComponent>
  );
};

const NavigateRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<DashBoardPage />}
          // element={<Navigate to={ROUTER_PATH.LOGIN} replace={true} />}
        />
        <Route path={ROUTER_PATH.LOGIN} element={<LoginPage />} />
      </Route>

      <Route element={<PublicNotFound />} path="*" />
    </Routes>
  );
};

export default RootRouters;
