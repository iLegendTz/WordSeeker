import React from "react";

import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "../components/home/HomeScreen";
import { CreateNewProyectScreen } from "../components/createProyect/CreateNewProyectScreen";
import { Navbar } from "../components/ui/Navbar";

export const PublicRoute = () => {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: 80 }}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/newProject" element={<CreateNewProyectScreen />} />
        </Routes>
      </div>
    </>
  );
};
