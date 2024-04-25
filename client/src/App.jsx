import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Service from "./component/service/Service";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import NavBar from "./navigation/NavBar";
import PageNotFound from "./component/pageNotFound/PageNotFound";
import Footer from "./component/footer/Footer";
import Logout from "./component/logout/Logout";

import ServeDe from "./serveD/ServeDe";
import Summary from "./summary/Summary";
import UpdateAndDelete from "./Admin/updateDelete/UpdateAndDelete";

import Payments from "./payment/Payments";
import AddServices from "./Admin/addService/AddServices";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addService" element={<AddServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/serveDetail" element={<ServeDe />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/updDel" element={<UpdateAndDelete />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
