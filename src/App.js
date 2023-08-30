
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import GoToApp from './pages/GoToApp';
import Help from './pages/Help';
import RecentlyViewed from './pages/RecentlyViewed';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/go to app' element={<GoToApp />} />
        <Route path='/help' element={<Help />} />
        <Route path='/recently viewed' element={<RecentlyViewed />} />
        <Route path='/sign up' element={<SignIn />} />
        <Route path='/log in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
