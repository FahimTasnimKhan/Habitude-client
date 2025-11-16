import React, { useState, useEffect } from 'react';
import { Timer, Edit, Trash2, Eye } from 'lucide-react';
import useAuth from '../../hooks/UseAuth';
import UseAxiosSecure from '../../axios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyHabits = () => {
  const { dbUser } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const [myHabits, setMyHabits] = useState([]);

  const { data: MyHabitsData = [], isPending } = useQuery({
    queryKey: ['myhabits', dbUser?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/habits/get-user-habits/${dbUser._id}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (MyHabitsData?.data) {
      setMyHabits(MyHabitsData.data);
    }
  }, [MyHabitsData]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl font-bold bg-linear-to-r from-red-900 to-red-500 via-red-700 bg-clip-text text-transparent mb-3">
          My Habits
        </h1>
        <p className="text-center text-base-content/60 text-lg mb-8">
          Control and Manage All of your Habits from 1 single place
        </p>

        <div className="divider mb-8"></div>

        <div className="bg-base-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-300">
                <tr>
                  <th className="text-base font-semibold">Name</th>
                  <th className="text-base font-semibold">Description</th>
                  <th className="text-base font-semibold text-center">
                    Is Public?
                  </th>
                  <th className="text-base font-semibold text-center">
                    Control Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {myHabits.map((habit) => (
                  <tr key={habit._id} className="hover">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={habit?.image} alt={habit?.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">
                            {habit?.title}
                          </div>
                          <div className="text-sm opacity-60 capitalize">
                            {habit?.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 max-w-md">
                      <p className="text-sm line-clamp-2 mb-2">
                        {habit?.description}
                      </p>
                      <div className="badge badge-outline badge-sm gap-2 mt-2">
                        <Timer size={14} />
                        {habit?.reminderTime}
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      {habit?.isPublic ? (
                        <span className="badge badge-success badge-sm">
                          Yes
                        </span>
                      ) : (
                        <span className="badge badge-ghost badge-sm">No</span>
                      )}
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="btn btn-sm btn-info btn-outline gap-1"
                          title="View Details"
                        >
                          <Eye size={16} />
                          Details
                        </button>
                        <button
                          className="btn btn-sm btn-warning btn-outline gap-1"
                          title="Update Habit"
                        >
                          <Edit size={16} />
                          Update
                        </button>
                        <button
                          className="btn btn-sm btn-error btn-outline gap-1"
                          title="Delete Habit"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {myHabits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-base-content/60">
              No habits found. Start building your habits today!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyHabits;
