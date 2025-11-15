import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router';
import RegisterForm from '../../components/Shared/Forms/RegisterFrom';



export default function RegisterUIOnly() {
  return (
    <div className="rounded-xl border border-white/20 shadow-lg m-4 p-6 bg-white/10 backdrop-blur-2xl text-white">
      <div className="flex gap-3">
        <FaUserPlus size={60} />
        <h2 className="text-4xl font-bold mb-8 pt-2">Register</h2>
      </div>

      {/* UI‑Only Register Form (inputs handled inside component) */}
      <RegisterForm uiOnly={true} />

      <div className="divider px-20">OR</div>

      {/* Social Login Buttons */}
      <div className="flex justify-between gap-4"></div>

      <p className="text-center text-[#E6EAD0]/80 mt-2">
        Already have an account?
        <Link to="/auth">
          <span className="text-white font-sm link"> Login</span>
        </Link>
      </p>
    </div>
  );
}
