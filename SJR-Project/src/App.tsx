import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import LoginUser from "./Pages/LoginUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;
