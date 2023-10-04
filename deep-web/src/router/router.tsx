import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OAuthPage from "../pages/OAuth";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oauth" element={<OAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
