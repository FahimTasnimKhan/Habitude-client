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

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'browse-habits', Component: BrowseHabits },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      { index: true, element: <h1>Hello Dashboard</h1> },
      {
        path: 'add-habit',
        Component: AddHabit,
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
