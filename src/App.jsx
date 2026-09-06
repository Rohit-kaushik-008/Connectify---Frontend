import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth.page.jsx";
import ProfilePage from "./pages/Profile.page.jsx";
import FeedPage from "./pages/Feed.page.jsx";
import PostPage from "./pages/Post.page.jsx";
import HomePage from "./pages/Home.page.jsx";
import RegisterPage from "./pages/Register.page.jsx";
import LoginPage from "./pages/Login.page.jsx";
import ProfileCustomize from "./pages/ProfileCustomize.page.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ProfileProvider } from "./contexts/ProfileContext.jsx";
import { PostProvider } from "./contexts/PostContext.jsx";

const App = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <PostProvider>
          <div className="bg-bg-main h-screen text-white">
            {/* Routes */}
            <div>
              <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/profileCustomization"
                  element={<ProfileCustomize />}
                />
              </Routes>
            </div>
          </div>
        </PostProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
