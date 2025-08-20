import React from 'react';
import { Users, Camera, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Attendees' },
    { icon: Camera, value: '50+', label: 'Designers' },
    { icon: Clock, value: '1', label: 'Day' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              About Yoda Ratna Awards
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Yoda Ratna Awards 2025 is a prestigious celebration of courage, creativity, and contribution — dedicated to honoring India's real heroes, inspiring women, and emerging leaders. Organized by BBR Foundation, this grand event recognizes bravery beyond the battlefield, the silent strength of families, and the innovation of women entrepreneurs.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              This grand celebration brings together military veterans, social contributors, fashion icons, and visionary talents in a powerful gathering of honor and opportunity. Yoda Shakti Samman for ex-army personnel, and Yoda Raksha Ratna for army wives and mothers, to Yoda Veera Naari for fearless women entrepreneurs — each award honors the spirit of service, sacrifice, and leadership.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With awards, grooming sessions, makeup artistry for military-themed storytelling, and high-impact media coverage — Yoda Ratna Awards is not just an event, but a movement. It empowers participants with visibility, branding, recognition, and pathways into films, fashion, and beyond.
            </p>
            <blockquote className="italic text-pink-400 font-medium text-lg mb-6">“She leads with purpose. He defends with honor. Together, they inspire a nation.”</blockquote>
            <p className="text-gray-300 leading-relaxed">
              Join us in Hyderabad and be part of this vibrant journey that celebrates passion, valor, and excellence.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="mb-3 flex justify-center">
                      <IconComponent className="text-pink-400 group-hover:text-yellow-400 transition-colors duration-300" size={32} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="/images/girl.png"
                alt="Yoda Ratna Awards"
                className="w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
