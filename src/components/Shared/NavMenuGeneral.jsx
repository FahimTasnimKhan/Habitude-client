// import ThemeSwitcher from '../shared/ThemeSwitcher';
// import AuthenticationButton from './AuthenticationButton';
import NavButton from './NavButton';

const NavMenuGeneral = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <NavButton label="Home" address="/" />
        <NavButton label="About Us" address="/about" />
        <NavButton label="Contact Us" address="/contact" />
        <NavButton label="Shop" address="/shop" />
        <NavButton label="Cart" address="/cart" />
        <NavButton label="Blog" address="/blog" />
        {/* <ThemeSwitcher /> */}
        {/* <AuthenticationButton /> */}
      </div>
    </>
  );
};

export default NavMenuGeneral;
