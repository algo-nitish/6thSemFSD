import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gray-800 text-white shadow-md">
      <h2 className="text-xl font-bold">LOGO</h2>

      <Link
        to="/homework"
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Homework
      </Link>
    </div>
  );
}

export default Header;
