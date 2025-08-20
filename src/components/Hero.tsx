import React, { useState, useEffect } from 'react';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-08-23T00:00:00'); // updated date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white pt-[90px] text-center px-4 sm:pt-[120px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source
            src="/images/Golden Animated Stars Award Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/30 to-pink-900/50" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
          <span className="bg-white text-black px-2 rounded mr-1">B B R</span>
          FOUNDATION.
        </h1>
        <p className="text-lg text-white mt-2 mb-1">PRESENTED BY</p>
        <div className="w-full flex justify-center mb-4">
          <img
            src="/images/yodara.png"
            alt="Yoda Ratna Logo"
            className="h-20 md:h-24 object-contain"
          />
        </div>
        <p className="text-yellow-400 text-2xl font-bold tracking-wide mb-6">AWARDS-2025</p>

        {/* Event Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-sm mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="text-pink-400" />
            <span>August 23, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" />
            <span>Hitex, Hyderabad, Telangana</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-6">
          <h3 className="text-lg mb-4 text-gray-300">Event Starts In</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[{ label: 'Days', value: timeLeft.days }, { label: 'Hours', value: timeLeft.hours }, { label: 'Minutes', value: timeLeft.minutes }, { label: 'Seconds', value: timeLeft.seconds }].map((item) => (
              <div key={item.label} className="bg-black/50 border border-pink-500/30 rounded-lg p-3">
                <div className="text-xl font-bold text-pink-400">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 text-base bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all"
          >
            Register Now
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 text-base border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all"
          >
            Learn More
          </button>
        </div>

        {/* Down Arrow */}
        <div className="mt-4">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white hover:text-pink-400"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
