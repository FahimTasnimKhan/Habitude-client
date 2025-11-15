import React, { useEffect } from 'react';
import { ArrowRight, CheckSquare, Bell, BarChart2, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../../assets/Logo/hero-gym.webp';
import { Link } from 'react-router';
import QuickStats from './QuickStats';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);

  const features = [
    {
      title: 'Track Habits',
      desc: 'Add habits and log daily completions',
      icon: <CheckSquare className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF4444]" />,
      path: '/add-habit',
    },
    {
      title: 'Streaks & Rewards',
      desc: 'See consecutive-day streaks and badges',
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF4444]" />,
      path: '/my-habits',
    },
    {
      title: 'Reminders',
      desc: 'Set daily reminders and notifications',
      icon: <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF4444]" />,
      path: '/reminders',
    },
    {
      title: 'Progress Analytics',
      desc: 'Weekly & monthly progress charts',
      icon: <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#EF4444]" />,
      path: '/dashboard/analytics',
    },
  ];

  return (
    <section
      className="relative flex items-center overflow-hidden transition-all duration-500 min-h-[calc(100vh-70px)]"
      aria-labelledby="hero-heading"
    >
      {/* Background Image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.95),rgba(24,24,24,0.9),rgba(0,0,0,0.85))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT SIDE */}
          <div
            className="text-center lg:text-left text-gray-100"
            data-aos="fade-up"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-5 border border-white/20">
              <CheckSquare className="w-4 h-4 text-[#EF4444]" />
              <span className="text-sm font-medium">
                Habitude — Build streaks, build life
              </span>
            </div>

            {/* Title */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-snug sm:leading-tight"
              data-aos="fade-right"
            >
              Build Regularity, <br />
              <span className="text-[#EF4444]">Celebrate Wins</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-gray-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Track daily habits, grow streaks, and stay motivated with simple
              tools that turn actions into routines — small wins compound into
              big changes.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link to="/add-habit" aria-label="Add a habit">
                <button className="flex items-center justify-center gap-2 text-white text-lg px-8 py-4 bg-[#EF4444] hover:bg-[#dc2626] rounded-lg font-semibold transition-all duration-300 w-full">
                  Add Habit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link to="/browse" aria-label="Browse public habits">
                <button className="text-white text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-[#EF4444] hover:border-[#EF4444] hover:text-white rounded-lg transition-all duration-300 w-full">
                  Browse Public Habits
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="max-w-md mx-auto lg:mx-0" data-aos="fade-up">
              <QuickStats />
            </div>
          </div>

          {/* RIGHT SIDE (Features) */}
          <div
            className="mt-10 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 lg:gap-6">
              {features.map((feature, idx) => (
                <Link
                  key={idx}
                  to={feature.path}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                  aria-label={feature.title}
                >
                  <div className="rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(239,68,68,0.25)] flex flex-col items-start hover:bg-white/10">
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">{feature.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
