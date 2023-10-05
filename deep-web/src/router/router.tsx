import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";
import OAuthPage from "../pages/OAuth/OAuth";
import NoMatchPage from "../pages/NoMatch";
import CardListPage from "../pages/CardList";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/showCard" element={<ShowCard />} />
        <Route path="/oauth" element={<OAuthPage />} />
        <Route path="/cardlist" element={<CardListPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
