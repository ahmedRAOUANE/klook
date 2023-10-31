import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import GoToApp from "./pages/GoToApp";
import Help from "./pages/Help";
import RecentlyViewed from "./pages/RecentlyViewed";
import SignIn from "./pages/SignIn";
import { Box } from "@mui/material";
import Activity from "./pages/Activity";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <div style={{marginTop: "70px"}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/go to app" element={<GoToApp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/recently viewed" element={<RecentlyViewed />} />
          <Route path="/sign up" element={<SignIn />} />
          <Route path="/log in" element={<SignIn />} />
          <Route path="/activity/:id" element={<Activity />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;
