import React from 'react';
import UseAxiosSecure from '../../axios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import HabitCard from '../../components/Shared/HabitCard';

const BrowseHabits = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: publicHabits = [], isPending } = useQuery({
    queryKey: ['publicHabits'], // new key: all users
    queryFn: async () => {
      const res = await axiosSecure.get('/api/habits'); // no email filter
      return res.data?.data;
    },
  });
  if (isPending) {
    return (
      <div data-theme="dark" className="bg-black min-h-screen md:pt-20">
        <h1 className="text-4xl text-center font-medium">Browse Habits</h1>
        <p className="text-center text-gray-400 mt-3">
          See all of the Publicly available habits all from one place
        </p>
        <div className="divider"></div>

        {/* SKELETON GRID */}
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10 max-w-9xl lg:px-10 mx-auto pb-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-80 md:w-96 bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image skeleton */}
              <div className="skeleton h-48 w-full"></div>

              <div className="p-6 space-y-4">
                {/* Title skeleton */}
                <div className="skeleton h-6 w-40"></div>

                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-5/6"></div>
                </div>

                {/* Category + time skeleton */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="skeleton h-6 w-20 rounded-full"></div>
                  <div className="skeleton h-6 w-24 rounded-full"></div>
                </div>

                {/* Divider */}
                <div className="skeleton h-px w-full mt-4"></div>

                {/* Creator info */}
                <div className="flex items-center gap-3 mt-5">
                  <div className="skeleton h-12 w-12 rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  console.log(publicHabits);
  return (
    <div data-theme="dark" className="bg-black min-h-screen  md:pt-20">
      <h1 className="text-4xl text-center font-medium">Browse Habits</h1>
      <p className="text-center text-gray-400 mt-3">
        See all of the Publicly available habits all from one place
      </p>
      <div className="divider"></div>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10 max-w-9xl lg:px-10 mx-auto pb-10">
        {publicHabits.map((habit, index) => (
          <HabitCard habit={habit} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BrowseHabits;
