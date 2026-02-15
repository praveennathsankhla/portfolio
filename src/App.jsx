import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbaar from "./components/Navbaar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import FirstPage from "./pages/FirstPage";
import BlogDetail from "./pages/BlogDetail";
import Articles from "./pages/Articles";
import Research from "./pages/Research";

import Login from "./pages/Admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./pages/Admin/AdminLayout";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbaar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<BlogDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/:id" element={<BlogDetail />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
