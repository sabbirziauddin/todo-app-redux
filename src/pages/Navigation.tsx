import { ModeToggle } from "@/components/ui/ModeToggle";
import home from "../assets/home.svg";
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
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded transition"
        >
          Home
        </a>
        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </a>
        <ModeToggle  />
      </div>
    </nav>
  );
};

export default Navigation;
