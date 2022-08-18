import { SyntheticEvent, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
//Pages
import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Playlist from './pages/Playlist';
import RecentlyPlayed from './pages/RecentlyPlayed';
import LikedMusics from './pages/LikedMusics';
import RequireAuth from './components/requireAuth'
import PersistLogin from './components/PersistLogin';
import Users from './components/Users';
import CreatePlaylist from './pages/CreatePlaylist';
import Subscriptions from './pages/Subscriptions';
import RequireSP from './components/useSpotifyApi';
import Content from './components/Content';


function App() {
   const [navBar, setNavBar] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Layout navBar={navBar} setNavBar={setNavBar} />}>
        {/* Protected here */}
       <Route element={<PersistLogin />}>
          <Route element={<RequireSP />}>
          <Route index  element={<Home />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route element={<RequireAuth allowedRoles={[2001]} />}>
              <Route path='users'  element={<Users />} /> 
              <Route path='collections/' >
                <Route index element={<Home />} />
                <Route path=":id" element={<Content />} />
              </Route>
              <Route path='playlists' element={<Playlist />} />
              <Route path='create-playlist' element={<CreatePlaylist />} />
              <Route path='recently-played' element={<RecentlyPlayed />} />
              <Route path='liked-musics' element={<LikedMusics />} />
          </Route>
          </Route>
       </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />}  />
    </Routes>
  )
}

export default App;
