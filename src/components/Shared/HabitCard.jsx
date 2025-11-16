import React from 'react';

const HabitCard = ({ habit }) => {
  return (
    <div className="group relative bg-gray-900 cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-900/50 transition-all duration-300 border border-gray-800 w-96">
      {/* Image with overlay gradient */}
      <figure className="relative h-56 overflow-hidden">
        <img
          src={habit?.image}
          alt={habit?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      {/* Body */}
      <div className="p-6">
        {/* Title & Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-xl font-bold text-gray-100 leading-tight flex-1">
            {habit?.title}
          </h2>
          {habit?.isPublic && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              Public
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {habit?.description?.length > 90
            ? habit.description.slice(0, 90) + '...'
            : habit?.description}
        </p>

        {/* Category & Time Tags */}
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
            {habit?.category}
          </span>
          <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
            🕐 {habit?.reminderTime}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-5" />

        {/* Creator Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={habit?.creatorID?.photoURL}
              alt={habit?.creatorID?.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-800"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full ring-2 ring-gray-900" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-100 truncate">
              {habit?.creatorID?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {habit?.creatorID?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;

// // Demo Component
// export default function Demo() {
//   const sampleHabit = {
//     _id: '691953ae46d40db52b343ef0',
//     title: 'Test 100',
//     description: 'Test Description 100',
//     category: 'Fitness',
//     reminderTime: '14:31',
//     image:
//       'https://res.cloudinary.com/dbduiiimr/image/upload/v1763267500/nbmha8d0rqctbj8xpbhy.jpg',
//     creatorID: {
//       _id: '6918739ee7e7d477cdcc3ea7',
//       name: 'Ayon',
//       email: 'ayon55928@gmail.com',
//       photoURL:
//         'https://res.cloudinary.com/dbduiiimr/image/upload/v1763210141/cegsd8tiwsyimdjnesrs.jpg',
//     },
//     isPublic: true,
//     createdAt: '2025-11-16T04:31:42.111Z',
//     updatedAt: '2025-11-16T04:31:42.111Z',
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
//       <HabitCard habit={sampleHabit} />
//     </div>
//   );
// }
