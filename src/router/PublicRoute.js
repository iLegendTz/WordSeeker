import React from "react";

import { Routes, Route } from "react-router-dom";

import { CreateNewProjectWithFile } from "../components/createProyect/CreateNewProjectWithFileScreen";
import { CreateNewProjectWithMicrophoneScreen } from "../components/createProyect/CreateNewProjectWithMicrophoneScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

export const PublicRoute = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100%" }}>
      <Navbar />

      <div style={{ flex: "1 1 auto" }}>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newProject">
            <Route path="file" element={<CreateNewProjectWithFile />} />
            <Route
              path="microphone"
              element={<CreateNewProjectWithMicrophoneScreen />}
            />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
