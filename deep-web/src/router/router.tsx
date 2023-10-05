import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";
import OAuthPage from "../pages/OAuth/OAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="showCard" element={<ShowCard />} />
        <Route path="/oauth" element={<OAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;