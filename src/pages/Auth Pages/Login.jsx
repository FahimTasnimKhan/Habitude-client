import { GoPasskeyFill } from 'react-icons/go';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import InputField from '../../components/Input Field/Input Field';
import { Link, Navigate, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);
  // Hook from react-hook-form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  // OnSubmit Function
  const onSubmit = async (data) => {
    await toast
      .promise(
        (async () => {
          console.log(data);
          const email = data?.userEmail;
          const password = data?.password;
          console.log(email, password);

          // 1️⃣ Sign in the user
          await signIn(email, password);

          // 2️⃣ Reset the form
          reset();
          navigate('/');

          // 3️⃣ Return a message for the success toast
          return 'Successfully Logged In';
        })(),
        {
          loading: 'Logging in...',
          success: (msg) => msg, // shows "Successfully Logged In"
          error: 'Failed to login. Please try again.',
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        className="rounded-xl border border-white/20 shadow-lg m-4 p-6 
             bg-white/10 backdrop-blur-2xl text-white"
      >
        {/* Title */}
        <div className="flex items-center gap-4">
          <GoPasskeyFill size={60} />
          <h2 className="text-4xl text-[#F9FAF6] font-bold mb-8 pt-6">Login</h2>
        </div>

        {/* Login Form (UI only) */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            {/* Email Input */}
            <InputField
              register={register}
              label="User Email"
              name="userEmail"
              type="email"
              errors={errors}
              placeholder="xyz@gmail.com"
              icon={FaEnvelope}
            />

            {/* Password Input */}
            <InputField
              label="Password"
              register={register}
              name="password"
              errors={errors}
              type="password"
              placeholder="Enter your password"
              icon={FaLock}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <span className="text-[#A3B18A] hover:text-[#CDE4B0] hover:underline cursor-pointer text-sm transition-colors duration-300">
              Forgot Password?
            </span>
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
              Sign In
              <FaSignInAlt
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>
          </button>
        </form>

        <div className="divider px-20 flex justify-center">OR</div>

        {/* No Google / Github — Removed */}

        {/* Register Navigation */}
        <p className="text-center text-[#E6EAD0]/80 mt-2">
          Don't have an account?{' '}
          <Link
            to={'/auth/register'}
            className="font-medium link text-white hover:underline cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
