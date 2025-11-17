import React, { useEffect, useCallback, useMemo, useState } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import UseAxiosSecure from '../axios/UseAxiosSecure';

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [UesrLoading, setUserLoading] = React.useState(true);
  const axiosSecure = UseAxiosSecure();

  // Create user
  const createUser = useCallback(async (email, password) => {
    setUserLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // optional: setUser(cred.user); // onAuthStateChanged will handle this anyway
      return cred;
    } finally {
      // if you prefer to let the listener flip loading, remove this finally
      setUserLoading(false);
    }
  }, []);

  // Sign in
  const signIn = useCallback(async (email, password) => {
    setUserLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return cred;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Sign out
  const logout = useCallback(async () => {
    setUserLoading(true);
    try {
      await signOut(auth);
      setDbUser(null);
    } finally {
      setUserLoading(false);
    }
  }, []);

  // Auth state listener (single source of truth for `user`)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoading(true);
      setUser(currentUser);
      console.log('The user has been set and here is the user:', currentUser);

      if (currentUser?.uid) {
        // Define an async function inside the callback
        const fetchUserData = async () => {
          try {
            const response = await axiosSecure.get(
              `/api/users/get-by-uid/${currentUser.uid}`
            );
            console.log('User data from backend:', response.data?.data);
            setDbUser(response.data?.data);
          } catch (error) {
            console.error('Failed to fetch user data:', error);
          } finally {
            setUserLoading(false);
          }
        };

        fetchUserData();
      } else {
        setUserLoading(false); // no user logged in
      }
    });

    return unsubscribe; // cleanup listener
  }, []);

  const authInfo = useMemo(
    () => ({
      user,
      isUserLoading: UesrLoading,
      dbUser,
      createUser,
      signIn,
      logout,
    }),
    [user, UesrLoading, createUser, signIn, logout]
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
