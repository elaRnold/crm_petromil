import Image from "next/image";
import profilePic from "../../public/img/Foto_CV_Formal.jpeg";
import {
  FaUsers,
  FaRegBell,
  FaEllipsisV,
  FaChevronRight,
} from "react-icons/fa";
import {
  FaHouse,
  FaRegUser,
  FaUsersLine,
  FaGasPump,
  FaRightFromBracket,
} from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-2 bg-white border-b border-gray-300 min-w-[80rem]">
      <div className="flex items-center">
        <a href="/" className="p-1 px-2 ml-3 rounded-md bg-blue-200">
          <FaHouse className="h-6 w-6" color="blue" />
        </a>
        <a href="/" className="text-2xl ml-3 text-blue-600 font-semibold">
          CRM
        </a>
        <a href="/" className="text-xl ml-3">
          Home
        </a>

        {pathname === "/cartera" && (
          <a href="/cartera" className="text-xl ml-3 flex items-center">
            <div className="flex items-center">
              <FaChevronRight className="mr-2" /> Cartera
            </div>
            <div className="flex items-center font-semibold">
              <FaChevronRight className="mr-2" /> Cartera Corriente
            </div>
          </a>
        )}

        {pathname === "/group" && (
          <a href="/group" className="text-xl ml-3 flex items-center font-semibold">
            <FaChevronRight className="mr-2" /> Grupo Familiar
          </a>
        )}
      </div>

      <div className="flex items-center space-x-4 ml-60">
        <button className="flex items-center rounded-lg border p-2 border-gray-300 hover:bg-blue-100">
          <FaUsers className="h-6 w-6" />
          <span className="material-icons ml-2">Consolidado</span>
          <div className="h-5 w-5 ml-2 bg-red-600 rounded-full text-white">
            3
          </div>
        </button>
        <button className="relative rounded-lg border p-3 border-gray-300 hover:bg-blue-100">
          <FaRegBell className="h-4 w-4" />
          <span className="absolute top-0 right-0 block h-3 w-3 bg-red-600 rounded-full"></span>
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 px-2 border-l border-gray-300 hover:bg-blue-100"
          >
            <FaEllipsisV />
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold">Arnaldo Benavides</span>
              <span className="text-xs">Administrador</span>
            </div>
            <Image
              src={profilePic}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-cyan-600"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 rounded-t text-gray-800 hover:bg-gray-200"
              >
                <FaRegUser />
                Ver Perfil
              </a>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FaUsersLine />
                Aliados
              </a>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FaGasPump />
                PDS
              </a>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 rounded-b text-red-600 hover:bg-gray-200"
              >
                <FaRightFromBracket color="red" />
                Cerrar sesión
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
