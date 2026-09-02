import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 p-4 h-screen justify-center items-center">
      <Link
        to="/register"
        className="py-2 px-4 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 w-3/5 text-center bg-theme-dark active:bg-theme-main font-body-6"
      >
        Sign up
      </Link>

      <Link
        to="/login"
        className="border py-2 px-4 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 w-3/5 text-center font-body-6"
      >
        Login
      </Link>
    </div>
  );
};

export default AuthPage;
