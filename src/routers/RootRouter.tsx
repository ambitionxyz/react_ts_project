import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { PublicLayout, SuspenseComponent } from "../../src/components";
import { ROUTER_PATH } from "../../src/constants/routers/constans";

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
          element={<Navigate to={ROUTER_PATH.LOGIN} replace={true} />}
        />
        <Route path={ROUTER_PATH.LOGIN} element={<div>man log in</div>} />
      </Route>
    </Routes>
  );
};

export default RootRouters;
