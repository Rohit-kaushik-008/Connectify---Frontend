import { Link } from "react-router-dom";
import emailIcon from "../assets/icons/emailIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";
import API from "../utils/API.js";

const RegisterPage = () => {
  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    API.post("/api/auth/register", data)
      .then(() => {
        alert("User Registered Successfully");
        e.target.reset();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center px-6">
      {/* Register Card */}
      <div
        className="w-full max-w-md bg-bg-light
                      border border-[hsl(230,29%,22%)]
                      rounded-2xl p-8 shadow-2xl"
      >
        {/* Heading */}
        <div className="mb-8">
          <h1 className="font-heading-2 text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="font-body-1 text-sm text-[hsl(0,0%,65%)] mt-2">
            Create your account and start your journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            registerUser(e);
          }}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium
                         text-white-1"
            >
              Email Address
            </label>

            <div className="relative">
              {/* Icon Space */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2
                              w-5 h-5"
              >
                <img src={emailIcon} alt="" />
              </div>

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12 pr-4
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-light"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2  text-sm font-medium
                         text-white-1"
            >
              Password
            </label>

            <div className="relative">
              {/* Lock Icon Space */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2
                              w-5 h-5"
              >
                <img src={passwordIcon} alt="" />
              </div>

              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12 pr-12
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-light"
              />
            </div>
          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="w-full h-14 mt-2
                      bg-linear-to-r
                    from-theme-light
           to-theme-main
           active:scale-95
           rounded-xl
           font-body-6
           font-semibold
           text-white
           transition-all duration-300
           cursor-pointer
           shadow-lg
           shadow-[hsl(262,83%,58%)/25%]"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <div className="mt-7 text-center">
          <p className="text-sm text-[hsl(0,0%,60%)]">
            Already have an account?{" "}
            <button
              type="button"
              className="font-body-6
                         font-medium
                         text-theme-main
                         hover:text-theme-light
                         transition-colors  cursor-pointer"
            >
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
