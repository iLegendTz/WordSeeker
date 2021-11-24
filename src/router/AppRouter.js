import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
