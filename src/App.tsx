import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import DonationPage from './pages/DonationPage';
import CareerPaths from './pages/CareerPaths';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import GoogleMapsLoader from './components/GoogleMapsLoader';
import JoinMovement from './pages/JoinMovement';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-patriot-cream to-white">
        <Header />
        <GoogleMapsLoader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/careers" element={<CareerPaths />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/join-movement" element={<JoinMovement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}