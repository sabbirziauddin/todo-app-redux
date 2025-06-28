import { ModeToggle } from "@/components/ui/ModeToggle";
import home from "../assets/home.svg";
import { Link } from "react-router";
const Navigation = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo or App Name */}
      <div className="flex items-center text-xl font-bold text-gray-800">
        <img src={home} alt="Home" className="h-8 w-8 mr-2" />
        MyApp
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link
          to="/tasks"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
        >
          Task
        </Link>
        <Link
          to="/user"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          users
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
