import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Customers from "./domain/Customers";
import Category from "./domain/Category";
import IncentiveCreditGift from "./domain/IncentiveCreditGift";
import IncentiveDiscount from "./domain/IncentiveDiscount";
import CopounReport from "./domain/CopounReport";
import IncentiveGift from "./domain/IncentiveGift";
import AddCategory from "./domain/Category/AddCategory";
import CUtsomerDetail from "./domain/Customers/Detail";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/detail/:id" element={<CUtsomerDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/createCategory" element={<AddCategory />} />
          <Route path="/incentiveCreditGift" element={<IncentiveCreditGift />} />
          <Route path="/incentiveDiscount" element={<IncentiveDiscount />} />
          <Route path="/copounReport" element={<CopounReport />} />
          <Route path="/incentiveGift" element={<IncentiveGift />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
