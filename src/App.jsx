import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbaar from "./components/Navbaar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import FirstPage from "./pages/FirstPage";

import AdminLayout from "./pages/Admin/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Navbaar />

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Project />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/admin" element={<AdminLayout/>}/>
      </Routes>

      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
