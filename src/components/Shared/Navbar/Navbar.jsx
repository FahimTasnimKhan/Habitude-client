import HabitudeLogo from './HabitudeLogo';
import HamburgerButton from './HamburgerButton';
import NavMenuGeneral from './NavMenuGeneral';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <HabitudeLogo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <NavMenuGeneral />
          {/* Future avatar or buttons can go here */}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <HamburgerButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
