import { NavLink } from 'react-router';
// import { useTheme } from '../../../hooks/useTheme';

const NavButton = ({ label, icon: Icon, address, onClick, textSize }) => {
  return (
    <>
      <NavLink
        to={address}
        onClick={onClick}
        className={` btn bg-transparent border-0 btn-color shadow-none tracking-wider text-${textSize} `}
      >
        {Icon && <Icon size={20} />}
        {label}
      </NavLink>
    </>
  );
};

export default NavButton;
