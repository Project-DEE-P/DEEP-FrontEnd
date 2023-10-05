import React from "react";
import { Route, Routes } from "react-router-dom";
import OAuthPage from "../pages/OAuth";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OAuthPage />} />
      </Routes>
    </>
  );
}
