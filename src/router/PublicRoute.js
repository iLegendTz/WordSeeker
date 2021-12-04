import React from "react";

import { Routes, Route } from "react-router-dom";

import { CreateNewProyectOptionsScreen } from "../components/createProyect/CreateNewProyectOptionsScreen";
import { CreateNewProyectWithFile } from "../components/createProyect/CreateNewProyectWithFileScreen";
import { CreateNewProyectWithMicrophoneScreen } from "../components/createProyect/CreateNewProyectWithMicrophoneScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { Navbar } from "../components/ui/Navbar";

export const PublicRoute = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      <Navbar />

      <div style={{ flex: "1 1 auto" }}>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newProject">
            <Route index element={<CreateNewProyectOptionsScreen />} />
            <Route path="file" element={<CreateNewProyectWithFile />} />
            <Route
              path="microphone"
              element={<CreateNewProyectWithMicrophoneScreen />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
