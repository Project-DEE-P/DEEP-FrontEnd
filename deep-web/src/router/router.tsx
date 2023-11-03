import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";
import OAuthPage from "../pages/OAuth/OAuth";
import NoMatchPage from "../pages/NoMatch";
import CardListPage from "../pages/CardList";
import Production from "../pages/Production";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowCard />} />\
          <Route path="production" element={<Production />} />
          <Route path="/showCard/:cardId" element={<ShowCard />} />
          <Route path="/oauth" element={<OAuthPage />} />
          <Route path="/cardlist" element={<CardListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
