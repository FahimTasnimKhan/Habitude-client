// import ThemeSwitcher from '../shared/ThemeSwitcher';
// import AuthenticationButton from './AuthenticationButton';

import toast from 'react-hot-toast';
import useAuth from '../../../hooks/UseAuth';
import NavButton from './NavButton';
import { useNavigate } from 'react-router';
const NavMenuGeneral = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
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
      <div className="flex justify-center items-center gap-2 ">
        <NavButton className='' label="Home" address="/" />
        <NavButton className='' label="About Us" address="/about" />
        <NavButton className='' label="Contact Us" address="/contact" />
        <NavButton className='' label="Shop" address="/shop" />
        <NavButton className='' label="Cart" address="/cart" />
        <NavButton className='' label="Blog" address="/blog" />
        {user ? (
          <button className="btn bg-black text-white" onClick={HandleLogout}>
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/auth')}
            className="btn bg-black text-white"
          >
            Login
          </button>
        )}
        {/* <ThemeSwitcher /> */}
        {/* <AuthenticationButton /> */}
      </div>
    </>
  );
};

export default NavMenuGeneral;
