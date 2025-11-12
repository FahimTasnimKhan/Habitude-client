import HabitudeLogo from './HabitudeLogo';
import HamburgerButton from './HamburgerButton';
import NavMenuGeneral from './NavMenuGeneral';

const Navbar = () => {
  //   const { theme } = useTheme();
  //   const navStyle =
  //     theme === 'dark'
  //       ? 'w-full fg-dark border-b border-white'
  //       : 'w-full navbar-light border-b border-white';
  return (
    <>
      <div className={``}>
        <div className="w-11/12 flex justify-between items-center mx-auto py-2">
          {/*Logo Section ------------------- */}
          <div>
            <HabitudeLogo />
          </div>

          {/*Nav Links In Large Screen ----------------------- */}
          <div className="hidden lg:flex items-center gap-2">
            <NavMenuGeneral />
            {/* <NavAvatar /> */}
          </div>

          {/*Hamburger Menu In Small Screen ----------------------- */}
          <div className="flex lg:hidden">
            <HamburgerButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
