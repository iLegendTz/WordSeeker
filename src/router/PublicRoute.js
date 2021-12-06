import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { CreateNewProjectWithFileScreen } from "../components/createProyect/createProjectWithFile/CreateNewProjectWithFileScreen";
import { CreateNewProjectWithMicrophoneScreen } from "../components/createProyect/createProjectWithMic/CreateNewProjectWithMicrophoneScreen";
import { FAQScreen } from "../components/FAQ/FAQScreen";
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
            <Route index element={<Navigate to="/" />} />
            <Route path="file" element={<CreateNewProjectWithFileScreen />} />
            <Route
              path="microphone"
              element={<CreateNewProjectWithMicrophoneScreen />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

          <Route path="FAQ" element={<FAQScreen />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
