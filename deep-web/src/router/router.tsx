import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="showCard" element={<ShowCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;