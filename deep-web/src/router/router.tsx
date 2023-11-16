import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCard from "../pages/ShowCard/index";
import OAuthPage from "../pages/OAuth/OAuth";
import NoMatchPage from "../pages/NoMatch";
import CardListPage from "../pages/CardList";
import { ToastContainer } from "react-toastify"
import Production from "../pages/Production";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import { RecoilRoot } from "recoil";
import LandingPage from "../pages/Landing";
import TemplatePage from "src/pages/Template";

const Router = () => {
  return (
    <RecoilRoot>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/showCard/:istemplate/:id" element={<ShowCard />} />
          <Route path="/oauth" element={<OAuthPage />} />
          <Route path="/cardlist" element={<CardListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/template" element={<TemplatePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
