import React, { useState } from 'react';
import { Heart, Users, Star } from 'lucide-react';
import AmbassadorForm from '../components/forms/AmbassadorForm';
import BusinessIntakeForm from '../components/forms/BusinessIntakeForm';

export default function JoinMovement() {
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);
  const [showBusinessForm, setShowBusinessForm] = useState(false);

  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Join The Movement
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            Choose your path to make a difference in young lives through faith and purpose.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Heart className="w-12 h-12 text-patriot-red mb-4" />
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Become an Ambassador</h3>
              <p className="text-patriot-blue mb-6">
                Share the message far and wide. Every like, post, and comment helps us reach more 
                people and grow the movement.
              </p>
              <button 
                onClick={() => setShowAmbassadorForm(true)}
                className="bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
              >
                Start Your Journey
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Star className="w-12 h-12 text-patriot-red mb-4" />
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Business Partnership</h3>
              <p className="text-patriot-blue mb-6">
                Partner with us to create opportunities for youth and make a lasting impact in 
                your community.
              </p>
              <button 
                onClick={() => setShowBusinessForm(true)}
                className="bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {showAmbassadorForm && (
        <AmbassadorForm onClose={() => setShowAmbassadorForm(false)} />
      )}

      {showBusinessForm && (
        <BusinessIntakeForm onClose={() => setShowBusinessForm(false)} />
      )}
    </main>
  );
}