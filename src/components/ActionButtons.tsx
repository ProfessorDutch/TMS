import React from 'react';
import { Share2, Heart } from 'lucide-react';

interface ActionButtonsProps {
  onShareMemory: () => void;
  onJoinMission: () => void;
}

export default function ActionButtons({ onShareMemory, onJoinMission }: ActionButtonsProps) {
  return (
    <section className="py-8 bg-patriot-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={onShareMemory}
            className="flex items-center gap-2 bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
          >
            <Share2 className="w-5 h-5" />
            Share Your Story
          </button>
          <button
            onClick={onJoinMission}
            className="flex items-center gap-2 bg-patriot-navy text-white px-8 py-3 rounded-full hover:bg-patriot-blue transition-colors"
          >
            <Heart className="w-5 h-5" />
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
}