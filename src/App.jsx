import './css/App.css'
import Favorites from './assets/pages/Favorites';
import Home from './assets/pages/Home';
import { Routes, Route } from "react-router-dom"

import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {

  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/moviedb-react" element={<Home />} />
          <Route path="/moviedb-react/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
