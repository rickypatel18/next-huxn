import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import { data } from "./db/data";
import { useFilterStore } from "./store/store";

interface Product {
  id: string;
  country: string;
  img:  {
    black: string;
    brown?: string;
    red?: string;
    white?: string;
    golden?: string;
    // Add other possible colors here
    [key: string]: string | undefined;
  };
  price: number;
}

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore();

  const filterdData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.some(color => color in item.img);
      // Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesPrice && matchesCountry;
  });

  return (
    <>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filterdData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;
