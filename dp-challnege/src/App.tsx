import axios from "axios";
import ProductList from "./components/ProductList";
import DataSource from "./shared/DataSource";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div className="mt-[20px]">
      <h1>Welcome to the fake store</h1>
      <DataSource
        getDataFunc={getServerData("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductList products={null}></ProductList>
      </DataSource>
    </div>
  );
};

export default App;
