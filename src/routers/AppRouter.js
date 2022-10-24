// @flow
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DigitalServices from "../pages/DigitalServices";
import Sucess from "../pages/Sucess";
const AppRouter = (): any => {
  return (
    <Routes>
      <Route path="/" element={<DigitalServices />} />
      <Route path="sucess" element={<Sucess />} />
    </Routes>
  );
};

export default AppRouter;
