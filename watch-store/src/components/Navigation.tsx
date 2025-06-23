import { IoBagAddOutline, IoFilterOutline } from "react-icons/io5";

interface NavigationProps {
  toggleSidebar: () => void;
}

const Navigation = ({ toggleSidebar }: NavigationProps) => {
  return (
    <div className="mt-[2rem] container w-[98%] ml-[5rem] flex justify-between items-center ">
      <h1 className="logo">
        <IoFilterOutline
          onClick={toggleSidebar}
          size={27}
          className="ml-[4rem] cursor-pointer"
        />
      </h1>

      <nav>
        <ul className="flex items-center mr-[2rem] space-x-4">
          <li>search</li>
          <li>Help</li>
          <li>Account</li>
        </ul>
      </nav>
      <IoBagAddOutline size={27} className="cursor-pointer" />
    </div>
  );
};

export default Navigation;
