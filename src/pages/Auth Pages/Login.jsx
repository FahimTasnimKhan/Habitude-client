import { GoPasskeyFill } from 'react-icons/go';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import InputField from '../../components/Input Field/Input Field';

const Login = () => {
  return (
    <div>
      <div
        className="rounded-xl border border-white/20 shadow-lg m-4 p-6 
             bg-white/10 backdrop-blur-2xl text-white"
      >
        {/* Title */}
        <div className="flex items-center gap-4">
          <GoPasskeyFill size={60} />
          <h2 className="text-4xl text-[#F9FAF6] font-bold mb-8 pt-6">Login</h2>
        </div>

        {/* Login Form (UI only) */}
        <form>
          <div className="flex flex-col gap-3">
            {/* Email Input */}
            <InputField
              label="User Email"
              name="userEmail"
              type="email"
              placeholder="xyz@gmail.com"
              icon={FaEnvelope}
            />

            {/* Password Input */}
            <InputField
              label="Password"
              name="password"
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
            type="button"
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
          Don't have an account?
          <span className="font-medium link text-white hover:underline cursor-pointer">
            {' '}
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
