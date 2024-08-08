import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import LoginUser from "./Pages/LoginUser";
import RegisterUser from "./Pages/RegisterUser";
import LoginOperator from "./Pages/LoginOperator";
import LoginAdmin from "./Pages/LoginAdmin";
import MainPageUser from "./Pages/MainPageUser";
import CartPageUser from "./Pages/CartPageUser";
import OrderPageUser from "./Pages/OrderPageUser";
import ProfileUser from "./Pages/ProfileUser";
import MainPageOperator from "./Pages/MainPageOperator";
import OrderDetailsOperator from "./Pages/OrderDetailsOperator";
import MainPageAdmin from "./Pages/MainPageAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/loginoperator" element={<LoginOperator />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/mainuser" element={<MainPageUser />} />
        <Route path="/cartuser" element={<CartPageUser />} />
        <Route path="/orderuser" element={<OrderPageUser />} />
        <Route path="/profileuser" element={<ProfileUser />} />
        <Route path="/mainoperator" element={<MainPageOperator />} />
        <Route path="/orderdetailsop" element={<OrderDetailsOperator />} />
        <Route path="/mainadmin" element={<MainPageAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
