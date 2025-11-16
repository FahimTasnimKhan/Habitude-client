import { Navigate } from 'react-router';
import useAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children }) => {
  const { user, isUserLoading } = useAuth();

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (user == null) {
    return <Navigate to={'/auth'}></Navigate>;
  }
  //   console.log(`The user is : ${user}`);
  return children;
};

export default PrivateRoute;
