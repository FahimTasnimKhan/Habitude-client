import { useParams } from 'react-router';
import useAuth from '../../hooks/UseAuth';
import UseAxiosSecure from '../../axios/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const HabitDetails = () => {
  const { id } = useParams();
  const { dbUser } = useAuth();
  const axiosSecure = UseAxiosSecure();
  //   Fetching Data
  const { data, isPending, refetch } = useQuery({
    queryKey: ['dashboard', 'users+books', id],
    queryFn: async () => {
      const [HabitRes, ProgressRes] = await Promise.all([
        axiosSecure.get(`/api/habits/${id}`),
        axiosSecure.get(`/api/progress/${dbUser?._id}/${id}`),
      ]);
      return {
        HabitData: HabitRes.data?.data,
        ProgressData: ProgressRes.data?.data,
      };
    },
    staleTime: 30_000,
  });
  //   Handle Button
  const HandleMarkAsComplete = async () => {
    const payload = {
      UserId: dbUser?._id,
      HabitId: HabitData?._id,
    };

    console.log('Yo here is the Payload 🚚: ', payload);

    await toast.promise(axiosSecure.post('/api/progress', payload), {
      loading: 'Marking habit as complete...',
      success: 'Habit marked as completed!',
      error: 'Failed to mark habit. Try again!',
    });

    refetch();
  };

  if (isPending) {
    return (
      <div data-theme="dark" className="bg-black min-h-screen pt-15 pb-20">
        {/* BANNER SKELETON */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <div className="w-full h-full skeleton"></div>

          {/* Fake overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="skeleton h-10 w-48 md:w-80 mb-4"></div>
            <div className="skeleton h-6 w-24 rounded-full"></div>
          </div>
        </div>

        {/* MAIN CONTENT SKELETON */}
        <div className="max-w-4xl mx-auto px-4 -mt-16">
          <div
            className="
            bg-white/5 backdrop-blur-xl border border-white/10
            rounded-2xl shadow-xl p-8
          "
          >
            {/* Description title skeleton */}
            <div className="skeleton h-7 w-40 mb-4"></div>

            {/* Description paragraph skeleton */}
            <div className="space-y-3">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
              <div className="skeleton h-4 w-4/6"></div>
            </div>

            {/* Reminder time skeleton */}
            <div className="mt-8">
              <div className="skeleton h-6 w-32 mb-3"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>

            {/* Progress summary skeleton */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-lg">
                <div className="skeleton h-6 w-24 mx-auto mb-4"></div>
                <div className="skeleton h-10 w-10 mx-auto"></div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-lg">
                <div className="skeleton h-6 w-28 mx-auto mb-4"></div>
                <div className="skeleton h-10 w-10 mx-auto"></div>
              </div>
            </div>

            {/* BUTTON SKELETON */}
            <div className="mt-10 text-center">
              <div className="skeleton h-12 w-64 mx-auto rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const HabitData = data?.HabitData;
  const ProgressData = data?.ProgressData;
  console.log(HabitData);
  console.log(ProgressData);
  return (
    <div data-theme="dark" className="bg-black min-h-screen pt-15 pb-20">
      {/* BANNER IMAGE */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src={HabitData?.image}
          alt={HabitData?.title}
          className="w-full h-full object-cover brightness-[0.6]"
        />

        {/* OVERLAY CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {HabitData?.title}
          </h1>

          <span
            className="
          mt-4 px-4 py-1 rounded-full text-sm font-semibold
          bg-white/20 text-white border border-white/30 backdrop-blur-md
        "
          >
            {HabitData?.category}
          </span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 -mt-16">
        <div
          className="
          bg-white/5 backdrop-blur-xl border border-white/10
          rounded-2xl shadow-xl p-8
        "
        >
          {/* Habit Description */}
          <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
          <p className="text-gray-300 leading-relaxed">
            {HabitData?.description}
          </p>

          {/* Reminder Time */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Reminder Time</h3>
            <p className="text-gray-300 text-lg mt-1">
              {HabitData?.reminderTime}
            </p>
          </div>

          {/* Progress Summary */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div
              className="
            bg-white/5 border border-white/10 rounded-xl p-6 text-center
            shadow-lg
          "
            >
              <h3 className="text-xl font-bold text-white">🔥 Streak</h3>
              <p className="text-3xl font-extrabold text-green-400 mt-2">
                {ProgressData?.streak || 0}
              </p>
            </div>

            <div
              className="
            bg-white/5 border border-white/10 rounded-xl p-6 text-center
            shadow-lg
          "
            >
              <h3 className="text-xl font-bold text-white">
                📅 Days Completed
              </h3>
              <p className="text-3xl font-extrabold text-blue-400 mt-2">
                {ProgressData?.DaysCompleted || 0}
              </p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="mt-10 text-center">
            {(() => {
              const today = new Date().toDateString();
              const alreadyCompleted = ProgressData?.progresses?.some(
                (p) => new Date(p.date).toDateString() === today
              );

              return alreadyCompleted ? (
                <button
                  className="
                  px-6 py-3 rounded-xl font-semibold text-white 
                  bg-green-700/70 border border-green-500 
                  cursor-not-allowed backdrop-blur-sm
                "
                >
                  ✓ You have already completed this habit today
                </button>
              ) : (
                <button
                  onClick={() => {
                    HandleMarkAsComplete();
                  }}
                  className="
                  px-6 py-3 rounded-xl font-semibold text-black 
                  bg-green-400 hover:bg-green-300 transition
                "
                >
                  Mark this Habit as Completed
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
