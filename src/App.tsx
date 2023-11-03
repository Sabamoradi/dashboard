import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Customers from "./domain/Customers";
import Category from "./domain/Category";
import IncentiveCreditGift from "./domain/IncentiveCreditGift";
import IncentiveDiscount from "./domain/IncentiveDiscount";
import CopounReport from "./domain/CopounReport";

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
          <Route path="/incentiveDiscount" element={<IncentiveDiscount />} />
          <Route path="/copounReport" element={<CopounReport />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
