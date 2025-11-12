import React from 'react';
import { Users, TrendingUp, CheckSquare } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    icon: <Users className="w-5 h-5 text-[#EF4444]" />,
    value: 10000,
    suffix: '+',
    label: 'Active Users',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#EF4444]" />,
    value: 500,
    suffix: '+',
    label: 'Habits Tracked',
  },
  {
    icon: <CheckSquare className="w-5 h-5 text-[#EF4444]" />,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
  },
];

const QuickStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 text-gray-100">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center lg:text-left transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
            {stat.icon}
            <p className="text-3xl font-bold text-white">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </p>
          </div>
          <p className="text-sm text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
