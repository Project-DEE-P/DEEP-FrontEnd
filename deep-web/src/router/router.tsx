import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";
import OAuthPage from "../pages/OAuth/OAuth";
import NoMatchPage from "../pages/NoMatch";
import CardListPage from "../pages/CardList";
import Login from "../components/Login";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowCard />} />
          <Route path="/showCard" element={<ShowCard />} />
          <Route path="/oauth" element={<OAuthPage />} />
          <Route path="/cardlist" element={<CardListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
