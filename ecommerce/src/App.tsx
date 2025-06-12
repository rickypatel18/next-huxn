import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar";
import ProductPage from "./components/ProductPage";
import PopularBlogs from "./components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContext />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
