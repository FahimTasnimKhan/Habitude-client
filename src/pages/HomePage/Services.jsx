import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './ServiceCard';
import { Target, Brain, Sparkles, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Better Focus',
    description:
      'Building small daily habits sharpens your ability to stay consistent and avoid distraction.',
    features: [
      'Improved Discipline',
      'Clear Goal Setting',
      'Stronger Routine',
      'Reduced Procrastination',
    ],
    color: 'bg-blue-500',
  },
  {
    icon: Brain,
    title: 'Reduced Stress',
    description:
      'Healthy habits help regulate your mind, reduce mental clutter, and create a calmer lifestyle.',
    features: [
      'Mindful Routines',
      'Healthier Lifestyle',
      'Mental Clarity',
      'Lower Burnout',
    ],
    color: 'bg-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Improved Well-Being',
    description:
      'Small improvements compound over time, boosting your overall happiness and self-confidence.',
    features: [
      'Health Boost',
      'Better Sleep',
      'Daily Motivation',
      'Positive Mindset',
    ],
    color: 'bg-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Trackable Growth',
    description:
      'See your streaks grow, measure progress, and stay motivated with clear habit analytics.',
    features: [
      'Streak History',
      'Habit Completion',
      'Visual Progress Charts',
      'Performance Insights',
    ],
    color: 'bg-green-500',
  },
];

const WhyBuildHabits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <div
      id="why-build-habits"
      className="md:py-24 py-16 min-h-screen flex items-center overflow-hidden bg-[#111827] text-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Why Build Habits?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Strong habits build strong lives. Discover how small daily actions
            lead to long-term transformation.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <ServiceCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBuildHabits;
