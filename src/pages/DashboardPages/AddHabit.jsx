import { ChevronDown, Dumbbell, ListPlus, Type } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaSignInAlt, FaTimes, FaUser } from 'react-icons/fa';
import InputField from '../../components/Input Field/Input Field';
import { IoTime } from 'react-icons/io5';
import useAuth from '../../hooks/UseAuth';
import UseAxiosSecure from '../../axios/UseAxiosSecure';
import toast from 'react-hot-toast';
import ImageUploader from '../../components/Input Field/ImageUpload';
const AddHabit = () => {
  const { dbUser, isUserLoading } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  // OnSubmit Function
  const onSubmit = async (data) => {
    console.log('Data from the Form: ', data);
    const payload = {
      title: data?.title,
      description: data?.description,
      category: data?.category,
      reminderTime: data?.time,
      isPublic: data?.isPublic === 'Yes' ? true : false,
      creatorID: dbUser?._id,
    };

    console.log('🚚 Your Add Habit Payload is: ', payload);

    toast
      .promise(axiosSecure.post('/api/habits', payload), {
        pending: 'Adding your habit...',
        success: 'Habit added successfully 👌',
        error: 'Failed to add habit 🤯',
      })
      .then(() => reset())
      .catch((err) => console.error(err));
  };

  if (isUserLoading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  //   console.log(dbUser);

  return (
    <div>
      {/* <h1 className="text-4xl text-center font-medium">Add Habit</h1>
      <p className="max-w-2xl mx-auto text-center my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa?
      </p>
      <div className="divider"></div> */}
      <div
        className="rounded-xl border border-white/20 shadow-lg m-4 p-6 
             bg-white/10 backdrop-blur-2xl text-white"
      >
        <div className="flex gap-4 items-center">
          <ListPlus size={50} />
          <h2 className="text-4xl font-bold text-[#F9FAF6]">Add Habit</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
            {/* Title Input */}
            <InputField
              register={register}
              label="Habit Title"
              name="title"
              type="text"
              errors={errors}
              placeholder="Habit Title"
              icon={Type}
            />
            {/* Email Input */}
            <InputField
              register={register}
              label="User Email"
              name="useremail"
              type="email"
              errors={errors}
              placeholder="User Email"
              icon={FaEnvelope}
              disabled={true}
              defaultValue={dbUser?.email}
            />
            {/* User Name Input */}
            <InputField
              register={register}
              defaultValue={dbUser?.name}
              label="User Name"
              name="username"
              type="text"
              errors={errors}
              placeholder="John Doe"
              icon={FaUser}
            />
            {/* Reminder Time */}
            <InputField
              register={register}
              label="Reminder Time"
              name="time"
              type="time"
              errors={errors}
              placeholder="07:00pm"
              icon={IoTime}
            />
            {/* Category Select */}
            <div className="mb-2 ">
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-1"
              >
                Category
              </label>

              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <ListPlus className="h-5 w-5 text-white" />
                </div>

                <select
                  id="category"
                  {...register('category', {
                    required: 'Category is required',
                  })}
                  className={`block w-full pl-10 pr-3 py-2 border rounded-md 
          bg-white/10 text-white appearance-none 
          focus:outline-none focus:ring-2 focus:ring-white/20`}
                >
                  <option value="" className="text-black">
                    -- Select Category --
                  </option>
                  <option value="Morning" className="text-black">
                    Morning
                  </option>
                  <option value="Work" className="text-black">
                    Work
                  </option>
                  <option value="Fitness" className="text-black">
                    Fitness
                  </option>
                  <option value="Evening" className="text-black">
                    Evening
                  </option>
                  <option value="Study" className="text-black">
                    Study
                  </option>
                </select>

                {/* Dropdown Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
            {/* Is Public */}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-white">
                Is Public?
              </label>

              <div className="relative">
                <select
                  className="
        w-full px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border 
        border-white/20 text-white text-sm outline-none
        focus:ring-2 focus:ring-white/20 focus:border-white/20
        appearance-none
      "
                  defaultValue="Yes"
                  {...register('isPublic', {
                    required: 'This field is required',
                  })}
                >
                  <option value="Yes" className="text-black">
                    Yes
                  </option>
                  <option value="No" className="text-black">
                    No
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                />
              </div>

              {errors.isPublic && (
                <p className="text-red-500 text-xs">
                  {errors.isPublic.message}
                </p>
              )}
            </div>

            {/* Text Area */}
            <div className="mb-2 md:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Description
              </label>

              <div className="relative rounded-md shadow-sm">
                <textarea
                  id="description"
                  placeholder="Describe your habit..."
                  {...register('description', {
                    required: 'Description is required',
                    minLength: {
                      value: 10,
                      message: 'Description must be at least 10 characters',
                    },
                  })}
                  rows={4}
                  className="block w-full pl-3 pr-3 py-2 border rounded-md 
                 bg-white/10 text-white placeholder-white/50
                 focus:outline-none focus:ring-2 focus:ring-white/20
                 backdrop-blur-md resize-none"
                ></textarea>
              </div>

              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* Image Uploader */}
            <div className="mb-10 h-[200px] md:col-span-2 w-full">
              <ImageUploader
                name="image"
                setValue={setValue}
                register={register}
                errors={errors}
              />
            </div>
          </div>
          {/* Submit Button */}

          <button
            type="submit"
            className="border group cursor-pointer rounded-lg bg-[#3E4B24]/80 hover:bg-[#4E5D2E] text-white pl-4 p-2 w-full  
                        focus:outline-none focus:ring-2 focus:ring-[#3E4B24] 
                        border-white/30 bg-white/10 text-white hover:bg-[#3E4B24]/50 
                        hover:text-white flex justify-center mt-4 transition-colors duration-300 backdrop-blur-md"
          >
            <span className="flex items-center gap-4 cursor-pointer">
              Add Habit
              <Dumbbell
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
