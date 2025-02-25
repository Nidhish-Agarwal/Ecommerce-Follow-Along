import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageLogin from "./Pages/PageLogin";
import PageSignUp from "./Pages/PageSignUp";
import HomePage from "./Pages/HomePage";
import ProductEntryPage from "./Pages/ProductEntryPage";
import UpdateForm from "./Pages/PageUpdate";
import Navbar from "./components/Navbar/Navbar";
import SinglePageProduct from "./Pages/SingleProductPage";
import CardPage from "./Pages/CartPage.jsx";
import ProfilePage from "./Pages/Profile";
import AddressCard from "./components/AddressComp/AddressCard.jsx";
import SelectAddres from "./Pages/SelectAddresspage.jsx";
import OrderConfirmation from "./Pages/OrderConformationPage";
import OrderHistory from "./Pages/Order-history";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/signup" element={<PageSignUp />}></Route>
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SinglePageProduct />} />
        <Route path="/cart" element={<CardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/select-address" element={<SelectAddres />} />
        <Route path="/add-address" element={<AddressCard />}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </>
  );
}

export default App;
