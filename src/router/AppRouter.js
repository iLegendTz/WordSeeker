import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../home/HomeScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
