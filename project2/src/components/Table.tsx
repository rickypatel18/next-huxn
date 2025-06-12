import { useState, useMemo } from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdSort } from "react-icons/md";

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const [filterVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    country: "",
    project: "",
    email: "",
  });
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSortOptionClick = (key: string) => {
    requestSort(key);
    setDropDownVisible(false);
  };

  const displayedProjects = useMemo(() => {
    let filteredData = [...data];

    filteredData = filteredData.filter((project) => {
      const globalSearchMatch = searchQuery
        ? Object.values(project).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          )
        : true;
      console.log(globalSearchMatch);

      const nameMatch = project.client
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const countryMatch = project.country
        .toLowerCase()
        .includes(filters.country.toLowerCase());
      const emailMatch = project.email
        .toLowerCase()
        .includes(filters.email.toLowerCase());
      const projectMatch = project.project
        .toLowerCase()
        .includes(filters.project.toLowerCase());
      const statusMatch = project.status
        .toLowerCase()
        .includes(filters.status.toLowerCase());

      return (
        globalSearchMatch &&
        nameMatch &&
        countryMatch &&
        emailMatch &&
        projectMatch &&
        statusMatch
      );
    });

    if (sortConfig !== null) {
      filteredData.sort((a, b) => {
        const key = sortConfig.key as keyof typeof a;
        if (a[key] < b[key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredData;
  }, [data, searchQuery, filters, sortConfig]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = displayedProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      <div className="flex items-center mb-5 gap-4">
        <input
          type="text"
          placeholder="Search table..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-900 text-white rounded p-2 border border-gray-700 w-full max-w-xs"
        />
        <div className="relative">
          <button
            onClick={() => setDropDownVisible(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" /> Sort
            <AiOutlineDown className="ml-2" />
          </button>

          {dropdownVisible && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-gray-800 border-gray-700 rounded shadow-lg w-40">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full text-left hover:bg-gray-700"
              >
                Name
              </button>
              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full text-left hover:bg-gray-700"
              >
                Country
              </button>
              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full text-left hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setFiltersVisible(!filterVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <MdSort className="mr-[0.3rem]" /> Filters
            <AiOutlineDown className="ml-2" />
          </button>

          {filterVisible && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded p-4 w-64 grid gap-4">
              <div>
                <label className="block text-white text-sm mb-1">
                  Filter by name
                </label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-1 w-full border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">
                  Filter by email
                </label>
                <input
                  type="text"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-1 w-full border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">
                  Filter by country
                </label>
                <input
                  type="text"
                  name="country"
                  value={filters.country}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-1 w-full border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">
                  Filter by project
                </label>
                <input
                  type="text"
                  name="project"
                  value={filters.project}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-1 w-full border border-gray-600"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">
                  Filter by status
                </label>
                <input
                  type="text"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="bg-gray-900 text-white rounded p-1 w-full border border-gray-600"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded border-collapse border border-gray-700 text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-5 py-3 text-left">Image</th>
              <th className="px-5 py-3 text-left">Name</th>
              <th className="px-5 py-3 text-left">Country</th>
              <th className="px-5 py-3 text-left">Email</th>
              <th className="px-5 py-3 text-left">Project Name</th>
              <th className="px-5 py-3 text-left">Task Progress</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-gray-900">
            {currentProjects.map((project, index) => (
              <tr className="border-b border-gray-700" key={index}>
                <td className="px-4 py-1">
                  <img
                    src={project.image}
                    className="w-12 h-12 object-cover rounded-full"
                    alt={project.client}
                  />
                </td>
                <td className="px-4 py-1">{project.client}</td>
                <td className="px-4 py-1">{project.country}</td>
                <td className="px-4 py-1">{project.email}</td>
                <td className="px-4 py-1">{project.project}</td>
                <td className="px-4 py-1">
                  <div className="w-24 h-2 bg-gray-700 rounded">
                    <div
                      className="h-2 bg-green-500 rounded"
                      style={{ width: project.progress }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-1">
                  <span>{project.status}</span>
                </td>
                <td className="px-4 py-1">{project.date}</td>
                <td className="px-4 py-1">
                  <div className="relative">
                    <BsThreeDots className="cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
            {currentProjects.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-4 text-gray-500">
                  No matching projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* pagination */}

        <div className="flex justify-end mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
          >
            Previous
          </button>

          <span className="px-4 py-2 text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
