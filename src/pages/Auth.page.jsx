import { Link } from "react-router-dom";
import Background from "../assets/images/Landing-Page-Background.png";

const AuthPage = () => {
  return (
    <div
      className="min-h-screen w-full fixed top-0 bg-[#0b1025] bg-cover bg-left sm:bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-xl">
            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-3xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-theme-light font-body-1" />
              Connect · Share · Grow
            </div>

            {/* Heading */}
            <h1 className="font-heading-1 text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Welcome to
              <span className="block bg-linear-to-r from-theme-light to-theme-dark bg-clip-text text-transparent">
                Connectify
              </span>
            </h1>

            {/* Description */}
            <p className="font-body-6 mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Meet new people, share your moments, and be part of a community
              that cares.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-row gap-4 font-body-6">
              <Link
                to="/register"
                className="flex items-center justify-center gap-2 rounded-xl bg-theme-dark px-8 py-3 font-body-6 text-white transition-all duration-200 hover:scale-[1.02] hover:bg-theme-main active:scale-95"
              >
                Sign up
              </Link>

              <Link
                to="/login"
                className="flex items-center justify-center rounded-xl bg-white/5 px-8 py-2 font-body-6 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 active:scale-95"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
