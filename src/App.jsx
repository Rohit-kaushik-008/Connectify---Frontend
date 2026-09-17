import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth.page.jsx";
import ProfilePage from "./pages/Profile.page.jsx";
import FeedPage from "./pages/Feed.page.jsx";
import PostPage from "./pages/Post.page.jsx";
import HomePage from "./pages/Home.page.jsx";
import RegisterPage from "./pages/Register.page.jsx";
import LoginPage from "./pages/Login.page.jsx";
import ProfileCustomize from "./pages/ProfileCustomize.page.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { ProfileProvider } from "./contexts/ProfileProvider.jsx";
import { PostProvider } from "./contexts/PostProvider.jsx";
import SearchPage from "./pages/Search.page.jsx";
import ExplorePage from "./pages/Explore.jsx";
import AppLayout from "./pages/AppLayout.jsx";

const App = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <PostProvider>
          <div className="bg-bg-main h-screen text-white relative">
            {/* Routes */}

            <Routes>
              {/* Auth pages */}
              <Route path="/" element={<AuthPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Main application layout */}
              <Route element={<AppLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route
                  path="/profileCustomization"
                  element={<ProfileCustomize />}
                />
              </Route>
            </Routes>
          </div>
        </PostProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
