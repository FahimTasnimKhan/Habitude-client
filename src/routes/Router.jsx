import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/HomePage/Home';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Auth Pages/Login';
import Register from '../pages/Auth Pages/Register';
import DashboardLayout from '../layout/DashboardLayout';
import AddHabit from '../pages/DashboardPages/AddHabit';
import BrowseHabits from '../pages/Browse Habits/BrowseHabits';
import MyHabits from '../pages/DashboardPages/MyHabits';
import UpdateHabit from '../pages/DashboardPages/UpdateHabit';
import HabitDetails from '../pages/Habit Details/HabitDetails';
import PrivateRoute from '../components/Private Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'browse-habits', Component: BrowseHabits },
      {
        path: 'habit-details/:id',
        element: (
          <PrivateRoute>
            <HabitDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      { index: true, element: <h1>Hello Dashboard</h1> },
      {
        path: 'add-habit',
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-habits',
        element: (
          <PrivateRoute>
            <MyHabits />
          </PrivateRoute>
        ),
      },
      {
        path: 'update-habit/:id',
        element: (
          <PrivateRoute>
            <UpdateHabit />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      { index: true, Component: Login },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);

export default router;
