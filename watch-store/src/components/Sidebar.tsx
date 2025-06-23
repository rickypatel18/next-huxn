import { useState } from "react";
import Navigation from "./Navigation";
import { useFilterStore } from "../store/store";
import { FiChevronDown, FiX } from "react-icons/fi";
import { data } from "../db/data";

// interface FilterState {
//   selectedCountries: string[];
//   selectedColors: string[];
//   selectedPriceRange: { min: number; max: number } | null;
//   setSelectedCoutries: (countries: string[]) => void;
//   setSelectedColors: (colors: string[]) => void;
//   setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
//   clearFilters: () => void;
// }

interface Product {
  country: string;
  img: {
    black?: string;
    brown?: string;
    red?: string;
    white?: string;
    golden?: string;
    // Add other possible colors here
    [key: string]: string | undefined;
  };
  price: number;
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countryDropdown, setCoutryDropdow] = useState<boolean>(false);
  const [colorDropdown, setColorDropdow] = useState<boolean>(false);
  const [priceDropdown, setPriceDropdow] = useState<boolean>(false);

  const {
    selectedCountries,
    setSelectedCountries,
    selectedColors,
    setSelectedColors,
    selectedPriceRange,
    setSelectedPriceRange,
    clearFilters,
  } = useFilterStore();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCoutryDropdown = () => setCoutryDropdow(!countryDropdown);

  const uniqueCountry = Array.from(
    new Set(data.map((item: Product) => item.country))
  );

  const handleCountrySelection = (country: string) => {
    setSelectedCountries(
      selectedCountries.includes(country)
        ? selectedCountries.filter((c) => c !== country)
        : [...selectedCountries, country]
    );
  };

  const toggleColorDropdown = () => {
    setColorDropdow(!colorDropdown);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  const togglePriceDropdown = () => {
    setPriceDropdow(!priceDropdown);
  };
  const handlePriceRangeSelection = (
    range: { min: number; max: number; label: string } | null
  ) => {
    setSelectedPriceRange(range);
  };

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />

      {/* sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Filters</h2>
          <button>
            <FiX className="text-xl" onClick={toggleSidebar} />
          </button>
        </div>

        {/* filters */}
        <div className="p-4 space-y-6">
          {/* country filter */}
          <div>
            <button
              onClick={toggleCoutryDropdown}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium">Country</span>
              <FiChevronDown
                className={`transform ${countryDropdown ? "rotate-180" : ""}`}
              />
            </button>

            {countryDropdown && (
              <div className="mt-2 space-y-2">
                {uniqueCountry.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                    onClick={() => handleCountrySelection(country)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountrySelection(country)}
                      className="mr-2"
                    />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* colors filter */}
          <div>
            <button
              onClick={toggleColorDropdown}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium">Color</span>
              <FiChevronDown
                className={`transform ${colorDropdown ? "rotate-180" : ""}`}
              />
            </button>
            {colorDropdown && (
              <div className="mt-2 space-y-2">
                {["black", "brown", "red", "white", "golden"].map((color) => (
                  <div
                    key={color}
                    className="flex items-center"
                    onClick={() => handleColorSelection(color)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorSelection(color)}
                      className="mr-2"
                    />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* price filter */}
          <div>
            <button
              onClick={togglePriceDropdown}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium">Price</span>
              <FiChevronDown
                className={`transform ${priceDropdown ? "rotate-180" : ""}`}
              />
            </button>
            {priceDropdown && (
              <div className="mt-2 space-y-2">
                {[
                  {
                    label: "Below $300",
                    min: 0,
                    max: 300,
                  },
                  {
                    label: "$300 - $600",
                    min: 300,
                    max: 600,
                  },
                  {
                    label: "Above $600",
                    min: 600,
                    max: Infinity,
                  },
                ].map((range) => (
                  <div
                    key={range.label}
                    className="flex items-center"
                    onClick={() => handlePriceRangeSelection(range)}
                  >
                    <input
                      type="radio"
                      checked={
                        selectedPriceRange?.min === range.min &&
                        selectedPriceRange?.max === range.max
                      }
                      defaultChecked={range.label.includes("Below $300")}
                      onClick={() => handlePriceRangeSelection(range)}
                      className="mr-2"
                    />

                    <span>{range.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* footer */}
          <div className="p-4 border-t flex justify-between">
            <button
              onClick={clearFilters}
              className="bg-black text-white px-4 py-2 rounded ml-2"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
      {/* overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
