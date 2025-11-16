import { Calendar, House, PlusCircle, Settings } from 'lucide-react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../components/Shared/Footer';
import useAuth from '../hooks/UseAuth';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { isUserLoading } = useAuth();
  if (isUserLoading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  return (
    <div data-theme="dark" className="bg-black min-h-screen">
      <nav className="sticky top-0 z-100 bg-black">
        <Navbar />
      </nav>
      <div className="drawer lg:drawer-open pt-15">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 font-bold text-lg">User Dashboard</div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow space-y-5">
              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                  onClick={() => navigate('/dashboard')}
                >
                  {/* Home icon */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg> */}
                  <House size={18} />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </button>
              </li>

              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                  onClick={() => navigate('/dashboard/profile')}
                >
                  {/* Settings icon */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg> */}
                  <Settings size={18} />
                  <span className="is-drawer-close:hidden">
                    Profile Settings
                  </span>
                </button>
              </li>
              {/* Add Habit item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add-Habit"
                  onClick={() => navigate('/dashboard/add-habit')}
                >
                  {/* Settings icon */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg> */}
                  <PlusCircle size={18} />
                  <span className="is-drawer-close:hidden">Add Habit</span>
                </button>
              </li>
              {/* Add Habit item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add-Habit"
                  onClick={() => navigate('/dashboard/my-habits')}
                >
                  {/* Settings icon */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg> */}
                  <Calendar size={18} />
                  <span className="is-drawer-close:hidden">My Habits</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
