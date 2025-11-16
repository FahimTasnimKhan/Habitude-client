import React, { useState, useMemo } from 'react';
import UseAxiosSecure from '../../axios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import HabitCard from '../../components/Shared/HabitCard';

const BrowseHabits = () => {
  const axiosSecure = UseAxiosSecure();

  // Search & Filter States
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories (customize as required)
  const categories = ['All', 'Morning', 'Work', 'Fitness', 'Evening', 'Study'];

  const { data: publicHabits = [], isPending } = useQuery({
    queryKey: ['publicHabits'],
    queryFn: async () => {
      const res = await axiosSecure.get('/api/habits');
      return res.data?.data;
    },
  });

  // -----------------------
  // 🔍 COMBINED FILTER LOGIC
  // -----------------------
  const filteredHabits = useMemo(() => {
    return publicHabits.filter((habit) => {
      // Category filter
      if (selectedCategory !== 'All' && habit.category !== selectedCategory)
        return false;

      // Search filter
      const text = searchText.toLowerCase();
      return (
        habit.title.toLowerCase().includes(text) ||
        habit.description?.toLowerCase().includes(text)
      );
    });
  }, [publicHabits, searchText, selectedCategory]);

  // -----------------------
  // Skeleton Loader
  // -----------------------
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
              <div className="skeleton h-48 w-full"></div>
              <div className="p-6 space-y-4">
                <div className="skeleton h-6 w-40"></div>
                <div className="space-y-2">
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-5/6"></div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="skeleton h-6 w-20 rounded-full"></div>
                  <div className="skeleton h-6 w-24 rounded-full"></div>
                </div>
                <div className="skeleton h-px w-full mt-4"></div>
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

  // -----------------------
  // PAGE CONTENT
  // -----------------------
  return (
    <div data-theme="dark" className="bg-black min-h-screen md:pt-20">
      <h1 className="text-4xl text-center font-medium">Browse Habits</h1>
      <p className="text-center text-gray-400 mt-3">
        See all of the Publicly available habits all from one place
      </p>
      <div className="divider"></div>

      {/* ---------------------- */}
      {/* 🔎 SEARCH + FILTER UI */}
      {/* ---------------------- */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search habits..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="
              w-full md:w-1/2 px-4 py-3 rounded-xl
              bg-white/5 border border-white/10 text-white
              focus:outline-none focus:border-[#EF4444] transition
            "
          />

          {/* Category Dropdown */}
          <select
            className="
              w-full md:w-1/3 px-4 py-3 rounded-xl
              bg-white/5 border border-white/10 text-white
              focus:outline-none focus:border-[#EF4444] transition
            "
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* HABITS GRID */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10 max-w-9xl lg:px-10 mx-auto pb-10">
        {filteredHabits.length > 0 ? (
          filteredHabits.map((habit, index) => (
            <HabitCard habit={habit} key={index} />
          ))
        ) : (
          <p className="text-gray-400 text-center mt-10 col-span-full">
            No habits found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseHabits;
