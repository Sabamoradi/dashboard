import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Customers from "./domain/Customers";
import Category from "./domain/Category";
import IncentiveCreditGift from "./domain/IncentiveCreditGift/Category";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/incentiveCreditGift" element={<IncentiveCreditGift />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
