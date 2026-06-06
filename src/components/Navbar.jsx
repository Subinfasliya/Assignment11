import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="bg-gray-100 text-dark px-6 py-4">
        <div className="flex justify-between items-center">
          <Link>
            <h1 className="text-2xl font-bold">MyLogo</h1>
          </Link>

          {/* Medium to Large screen */}
          <ul className="hidden md:flex gap-6 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
          </ul>
          {/* Medium to Large screen ends*/}

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Hamburger Navbar */}
        {isOpen && (
          <ul className="flex flex-col gap-4 md:hidden font-semibold pt-5">
            <li>
              <Link className="cursor-pointer hover:text-yellow-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-yellow-300"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-yellow-300"
                to={"/users"}
              >
                Users
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};
export default Navbar;
