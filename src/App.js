
import {Routes, Route} from "react-router-dom";

// components
import Navbar from "./components/header/navbar/Navbar";
import HomePage from './pages/HomePage';
import GoToApp from './pages/GoToApp';
import Help from './pages/Help';
import RecentlyViewed from './pages/RecentlyViewed';
import SignIn from './pages/SignIn';
import PageHeader from "./components/header/pageHeader/PageHeader";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Container className="App">
      <Box>
        <header>
          <Navbar />
          <PageHeader />
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/go to app' element={<GoToApp />} />
          <Route path='/help' element={<Help />} />
          <Route path='/recently viewed' element={<RecentlyViewed />} />
          <Route path='/sign up' element={<SignIn />} />
          <Route path='/log in' element={<SignIn />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
