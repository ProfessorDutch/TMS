import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Church, Building2, Heart } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import ActionButtons from './ActionButtons';
import CareerPathsPreview from './CareerPathsPreview';
import DailyScripture from './DailyScripture';
import MemoryShare from './MemoryShare';
import BusinessIntakeForm from './forms/BusinessIntakeForm';
import AmbassadorForm from './forms/AmbassadorForm';
import PowerGiving from './PowerGiving';
import JourneyAhead from './JourneyAhead';
import MonthlyBlessingCircle from './subscription/MonthlyBlessingCircle';

export default function MainContent() {
  const navigate = useNavigate();
  const [showMemoryShare, setShowMemoryShare] = useState(false);
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-patriot-cream to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
                Empowering Youth Through Faith & Purpose
              </h1>
              <p className="text-xl text-patriot-blue mb-8">
                Join our movement to nurture young minds through Christ-centered education, mentorship, and life-changing opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowAmbassadorForm(true)}
                  className="bg-patriot-red text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2"
                >
                  Become an Ambassador <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowBusinessForm(true)}
                  className="bg-patriot-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-blue transition-colors"
                >
                  Business Partnership
                </button>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <VideoPlayer 
                url="https://www.youtube.com/watch?v=VAH-ixdFWFs"
                poster="https://images.unsplash.com/photo-1445112098124-3e76dd67983c?auto=format&fit=crop&w=2000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="bg-gradient-to-br from-patriot-cream to-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => navigate('/church-finder')}
              className="group relative overflow-hidden bg-patriot-navy text-white p-6 rounded-xl text-senior hover:bg-patriot-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Church className="w-8 h-8" />
                <span className="font-semibold">Find Your Church</span>
              </div>
            </button>

            <button 
              onClick={() => navigate('/business-support')}
              className="group relative overflow-hidden bg-patriot-red text-white p-6 rounded-xl text-senior hover:bg-patriot-crimson transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-patriot-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Building2 className="w-8 h-8" />
                <span className="font-semibold">Support as a Business</span>
              </div>
            </button>

            <button 
              onClick={() => setShowMemoryShare(true)}
              className="group relative overflow-hidden bg-patriot-navy text-white p-6 rounded-xl text-senior hover:bg-patriot-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Heart className="w-8 h-8" />
                <span className="font-semibold">Share Memory</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <ActionButtons
        onShareMemory={() => setShowMemoryShare(true)}
        onJoinMission={() => navigate('/support')}
      />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <CareerPathsPreview />
        </div>
      </section>

      <section className="py-12 bg-patriot-cream">
        <div className="max-w-6xl mx-auto px-4">
          <JourneyAhead />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <MonthlyBlessingCircle />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <PowerGiving />
        </div>
      </section>

      <section className="py-12 bg-patriot-cream">
        <div className="max-w-6xl mx-auto px-4">
          <DailyScripture />
        </div>
      </section>

      {/* Modals */}
      {showMemoryShare && (
        <MemoryShare onClose={() => setShowMemoryShare(false)} />
      )}
      {showBusinessForm && (
        <BusinessIntakeForm onClose={() => setShowBusinessForm(false)} />
      )}
      {showAmbassadorForm && (
        <AmbassadorForm onClose={() => setShowAmbassadorForm(false)} />
      )}
    </main>
  );
}