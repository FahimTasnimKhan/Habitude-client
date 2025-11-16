import { useNavigate } from 'react-router';
import HabitudeLogo from './HabitudeLogo';
import NavButton from './NavButton';
import useAuth from '../../../hooks/UseAuth';
import toast from 'react-hot-toast';

const HamburgerSidebar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const HandleLogout = async () => {
    try {
      logout();
      console.log('Logged Out successfully');
      toast.success('Logged Out Successfully');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-start pl-2 pt-6 bg-black text-white h-screen">
        {/* 1. Logo Section------------ */}
        <HabitudeLogo />

        <hr className="w-2/3 my-4 flex justify-center border-gray-400" />

        {/* 2. Links Section------------ */}
        <NavButton className="" label="Home" address="/" />
        <NavButton className="" label="About Us" address="/about" />
        <NavButton className="" label="Contact Us" address="/contact" />
        <NavButton className="" label="All Habits" address="/browse-habits" />
        {user && (
          <NavButton
            className=""
            label="My Habits"
            address="/dashboard/my-habits"
          />
        )}
        {user && (
          <NavButton
            className=""
            label="Add Habit"
            address="/dashboard/add-habit"
          />
        )}
        {user ? (
          <button className="btn bg-black text-white ml-4" onClick={HandleLogout}>
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="btn bg-black text-white ml-4"
          >
            Login
          </button>
        )}

        
      </div>
    </>
  );
};

export default HamburgerSidebar;
