import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/cadastro" element={<Register/>} />
      <Route element={<ProtectedRoutes/>}>
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
  );
};
