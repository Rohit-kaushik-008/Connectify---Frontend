import { Link } from "react-router-dom";
import emailIcon from "../assets/icons/emailIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";
import API from "../utils/API";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { saveToLocalStorage } from "../Storage/localStorage.js";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setUserId, setProfileId } = useAuth();

  const loginUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    API.post("/api/auth/login", data)
      .then((res) => {
        const userId = res.data.data._id;
        setUserId(userId);
        setProfileId(userId);
        saveToLocalStorage(userId, userId);
        navigate("/profile");
        e.target.reset();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center px-4">
      {/* Login Card */}
      <div
        className="w-full max-w-md
                   bg-bg-light
                   border border-[hsl(230,29%,22%)]
                   rounded-2xl
                   p-8
                   shadow-2xl"
      >
        {/* Heading */}
        <div className="mb-8">
          <h1
            className="font-['Space_Grotesk']
                       text-3xl
                       font-bold
                       text-white"
          >
            Welcome Back
          </h1>

          <p
            className="
                       text-sm
                       text-[hsl(0,0%,65%)]
                       mt-2"
          >
            Login to continue your journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            loginUser(e);
          }}
          autoComplete="off"
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2
                         
                         text-sm
                         font-medium
                         text-white-1
                         pl-2"
            >
              Email Address
            </label>

            <div className="relative">
              {/* Email Icon */}
              <img
                src={emailIcon}
                alt=""
                className="absolute
                           left-4
                           top-1/2
                           -translate-y-1/2
                           w-5
                           h-5
                           opacity-70"
              />

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full
                           h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12
                           pr-4
                           
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
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="
                           text-sm
                           font-medium
                           text-white-1 
                           pl-2"
              >
                Password
              </label>
            </div>

            <div className="relative">
              {/* Password Icon */}
              <img
                src={passwordIcon}
                alt=""
                className="absolute
                           left-4
                           top-1/2
                           -translate-y-1/2
                           w-5
                           h-5
                           opacity-70"
              />

              <input
                id="password"
                type="password"
                name="password"
                minLength={4}
                maxLength={17}
                required
                placeholder="Enter your password"
                className="w-full
                           h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12
                           pr-12
                           
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-lightborder-theme-light"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full
                       h-14
                       mt-2
                       bg-linear-to-r
                       from-theme-light
                       to-theme-main
                       active:scale-95
                       rounded-xl
                       font-['Poppins']
                       font-semibold
                       text-white
                       transition-all
                       duration-300
                       shadow-lg
                       shadow-[hsl(262,83%,58%)/25%]
                       cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-7 text-center">
          <p
            className="
                       text-sm
                       text-[hsl(0,0%,60%)]"
          >
            Don't have an account?{" "}
            <button
              type="button"
              className="font-body-6
                         font-medium
                         text-theme-main
                         hover:text-theme-light
                         cursor-pointer
                         transition-colors"
            >
              <Link to="/register">Create Account</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
