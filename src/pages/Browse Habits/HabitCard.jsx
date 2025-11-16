import React from 'react';

const HabitCard = ({ habit }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-neutral/10 hover:shadow-md transition-all">
      {/* Image */}
      <figure className="h-56 overflow-hidden">
        <img
          src={habit?.image}
          alt={habit?.title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title">
          {habit?.title}
          {habit?.isPublic && (
            <div className="badge badge-secondary">Public</div>
          )}
        </h2>

        <p className="text-sm text-neutral-content">
          {habit?.description?.length > 80
            ? habit.description.slice(0, 80) + '...'
            : habit?.description}
        </p>

        {/* Category & Time */}
        <div className="flex items-center gap-2 mt-2">
          <div className="badge badge-outline">{habit?.category}</div>
          <div className="badge badge-outline">{habit?.reminderTime}</div>
        </div>

        {/* Creator */}
        <div className="mt-4 flex items-center gap-3">
          <img
            src={habit?.creatorID?.photoURL}
            alt={habit?.creatorID?.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div className="text-sm">
            <p className="font-semibold">{habit?.creatorID?.name}</p>
            <p className="text-xs text-neutral-content">
              {habit?.creatorID?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
