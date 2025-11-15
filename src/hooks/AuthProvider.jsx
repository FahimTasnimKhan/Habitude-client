import React, { useEffect, useCallback, useMemo } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import auth from './firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isUserLoading, setIsUserLoading] = React.useState(true);

  // Create user
  const createUser = useCallback(async (email, password) => {
    setIsUserLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      // optional: setUser(cred.user); // onAuthStateChanged will handle this anyway
      return cred;
    } finally {
      // if you prefer to let the listener flip loading, remove this finally
      setIsUserLoading(false);
    }
  }, []);

  // Sign in
  const signIn = useCallback(async (email, password) => {
    setIsUserLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return cred;
    } finally {
      setIsUserLoading(false);
    }
  }, []);

  // Sign out
  const logout = useCallback(async () => {
    setIsUserLoading(true);
    try {
      await signOut(auth);
    } finally {
      setIsUserLoading(false);
    }
  }, []);

  // Auth state listener (single source of truth for `user`)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsUserLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = useMemo(
    () => ({ user, isUserLoading, createUser, signIn, logout }),
    [user, isUserLoading, createUser, signIn, logout]
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
