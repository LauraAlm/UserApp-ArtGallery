import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePostPage from './pages/SinglePostPage';
import UserPostsPage from './pages/UserPostsPage';

import IndexPage from './pages/IndexPage';
import ProfilePage from './pages/ProfilePage';
import CreatePage from './pages/CreatePage';

import Toolbar from './components/Toolbar';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <link rel='stylesheet' href='https://fonts.google.com/specimen/Jost' />;
      <BrowserRouter>
        <Toolbar />

        <Routes>
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='/' element={<IndexPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create' element={<CreatePage />} />

          <Route path='/post/:username/:id' element={<SinglePostPage />} />
          <Route path='/userPosts/:username' element={<UserPostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
