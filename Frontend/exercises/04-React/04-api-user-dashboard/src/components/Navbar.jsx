import { NavLink } from "react-router-dom";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/users",
    text: "Users",
  },
  {
    url: "/posts",
    text: "Posts",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-300 fixed top-0 w-full z-50 sm:px-[15%]">
      <div className="flex items-center justify-center sm:justify-start py-2">
        {links.map((link) => (
          <NavLink
            key={link.url}
            to={link.url}
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-gray-600"
              } px-3 py-2 rounded-md text-sm font-medium`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
