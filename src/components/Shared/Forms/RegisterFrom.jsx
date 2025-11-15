// ----------------------------------------------------------------------------------
// React Icons, Puffloader, Input Fields Imported - Used In the Register Form Fields
// ----------------------------------------------------------------------------------
import {
  FaEnvelope,
  FaLock,
  FaUpload,
  FaUser,
  FaUserTag,
} from 'react-icons/fa';
import { PuffLoader, BounceLoader } from 'react-spinners';
import { GiArchiveRegister } from 'react-icons/gi';
import InputField from '../../Input Field/Input Field';
import { Controller } from 'react-hook-form';
import { useState } from 'react';

// ---------------------------------------------------------------------------
// RegisterForm Component - Used In the Register Page
// ---------------------------------------------------------------------------
const RegisterForm = ({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmit,

  uiOnly = false,
}) => {
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [uploadedUserPhoto, setuploadedUserPhoto] = useState(null);
  const HandleUploadPhoto = async (file) => {
    setUploadingPhoto(true);
    try {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => setuploadedUserPhoto(reader.result);
      reader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
    } finally {
      setUploadingPhoto(false);
    }
  };

  if (uiOnly) {
    return (
      <div>
        <div className="flex flex-col gap-4">
          <input className="p-2 rounded bg-white/20" placeholder="User Name" />
          <input className="p-2 rounded bg-white/20" placeholder="Email" />
          <input className="p-2 rounded bg-white/20" placeholder="Password" />
          <input
            className="p-2 rounded bg-white/20"
            placeholder="Confirm Password"
          />
          <select className="p-2 rounded bg-white/20">
            <option>Select a role</option>
          </select>
          <input type="file" className="p-2 rounded bg-white/20" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex flex-col gap-1">
        {/*------------------ User Photo Viewer ------------------*/}
        <div className="absolute right-2 top-6 w-20 h-24 rounded-md overflow-hidden border-2 border-gray-300 mb-1 flex items-center justify-end">
          {uploadedUserPhoto ? (
            <img
              src={uploadedUserPhoto}
              alt="User Photo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center pr-2">
              {uploadingPhoto ? <PuffLoader size={56} /> : <FaUser size={56} />}
            </div>
          )}
        </div>

        <div className="w-9/12 md:w-10/12">
          {/*------------------ User Name ------------------*/}
          <div className="mb-2 mr-4">
            <InputField
              label="User Name"
              name="userName"
              type="text"
              placeholder="Enter your user name"
              icon={FaUser}
              register={register}
              errors={errors}
              validationRules={{
                required: 'User Name is required',
                minLength: { value: 3, message: 'At least 3 characters' },
              }}
            />
          </div>

          {/*------------------ User Email ------------------*/}
          <div className="mr-4">
            <InputField
              label="User Email"
              name="userEmail"
              type="email"
              placeholder="xyz@gmail.com"
              icon={FaEnvelope}
              register={register}
              errors={errors}
              validationRules={{
                required: 'User Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              }}
            />
          </div>
        </div>

        {/*------------------ Password & Confirm Password ------------------*/}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex-1">
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              icon={FaLock}
              register={register}
              errors={errors}
              validationRules={{
                required: 'Password is required',
                minLength: { value: 8, message: 'At least 8 characters' },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;<>,.?~\\/-]).{8,}$/,
                  message:
                    'Must contain uppercase, lowercase, digit & special char',
                },
              }}
            />
          </div>

          <div className="flex-1">
            <InputField
              label="Confirm Password"
              name="reTypePassword"
              type="password"
              placeholder="Confirm Password"
              icon={FaLock}
              register={register}
              errors={errors}
              validationRules={{
                required: 'Please confirm your password',
                validate: (value, formValues) =>
                  value === formValues.password || 'Passwords do not match',
              }}
            />
          </div>
        </div>

        {/*------------------ Role & Upload Photo ------------------*/}
        <div className="flex justify-between gap-4 mt-2">
          <div className="w-[50%]">
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Role
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserTag className="h-5 w-5" aria-hidden="true" />
              </div>
              <select
                id="role"
                {...register('role', { required: 'Role is required' })}
                className={`block w-full pl-10 pr-3 py-2 border rounded-md bg-[#536258] cursor-pointer text-white focus:outline-none sm:text-sm ${
                  errors?.role ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {errors?.role && (
              <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
            )}
          </div>

          <div className="w-[50%]">
            <InputField
              label="Upload Photo"
              name="profilePhoto"
              type="file"
              placeholder="Select your profile photo"
              icon={FaUpload}
              register={register}
              errors={errors}
              validationRules={{
                required: 'Profile photo is required',
                validate: (value) => {
                  if (!value || value.length === 0)
                    return 'Please upload a photo';
                  const file = value[0];
                  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
                  if (!validTypes.includes(file.type))
                    return 'JPEG, PNG, GIF only';
                  if (file.size > 2 * 1024 * 1024)
                    return 'File size must be < 2MB';
                  return true;
                },
              }}
              onChange={(e) => {
                const file = e.target.files[0];
                HandleUploadPhoto(file); // update preview
              }}
            />
          </div>
        </div>

        {/*------------------ Submit Button ------------------*/}
        <div className="flex items-center gap-4 mt-2">
          <button
            type="submit"
            disabled={isSubmitting || uploadingPhoto}
            className="group w-full p-2 cursor-pointer rounded-lg border border-white/40 bg-white/10 text-white hover:bg-[#3E4B24]/60 flex justify-center transition-colors duration-300 backdrop-blur-md"
          >
            {isSubmitting ? (
              <BounceLoader size={24} />
            ) : (
              <p className="flex items-center gap-2">
                Register{' '}
                <GiArchiveRegister
                  className="transition-transform duration-300 group-hover:translate-x-2"
                  size={26}
                />
              </p>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
