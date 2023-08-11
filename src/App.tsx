import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Customers from "./domain/Customers";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
