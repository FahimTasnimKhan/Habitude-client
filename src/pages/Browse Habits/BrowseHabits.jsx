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
    return <div>Loading...</div>;
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
