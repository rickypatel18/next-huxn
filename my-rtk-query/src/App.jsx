import AddNewProduct from "./components/AddNewProduct";
import AllProdcuts from "./components/AllProdcuts";
import DeleteProduct from "./components/DeleteProduct";
import SpecificProduct from "./components/SpecificProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <div>
      {/* <AllProdcuts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId={3} /> */}
      <DeleteProduct productId={2}/>
    </div>
  );
};

export default App;
