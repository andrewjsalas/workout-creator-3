import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WorkoutSearch from './pages/WorkoutSearch';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/workoutsearch' element={ <WorkoutSearch /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
        <Navigation />
    </>
  );
}

export default App;
