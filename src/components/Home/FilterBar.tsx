import { useState } from "react";
import { FaCaretDown, FaFilter, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const FilterBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-white mt-2">
        <span className="text-sm font-semibold">Filtrado</span>
        <div className="flex items-center p-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center rounded-lg border p-1 border-gray-300 hover:bg-blue-100"
            >
              <FaFilter className="h-4 w-4" />
              <span className="material-icons ml-2 font-medium">Filtros</span>
              <div className="h-5 w-5 ml-2 bg-blue-200 rounded-full text-blue-700 font-semibold">
                3
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-2 border-b border-gray-300">
                  <span className="font-semibold">Filtro</span>
                  <div className="h-4 w-4 ml-2 hover:bg-blue-200 rounded-full">
                    <FaXmark onClick={toggleDropdown} />
                  </div>
                </div>
                <div className="flex flex-col p-4 border-b border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Mostrar por</span>
                    <span className="text-xs">Limpiar</span>
                  </div>
                  <div className="mt-2">
                    <div className="relative flex items-center">
                      <span className="absolute right-3 text-gray-400">
                        <FaCaretDown />
                      </span>
                      <input
                        type="text"
                        placeholder="Selecciona categoria"
                        className="flex items-center rounded-lg border p-1 border-gray-300 hover:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 border-b border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Zonas</span>
                    <span className="text-xs">Limpiar</span>
                  </div>
                  <div className="mt-2">
                    <div className="relative flex items-center">
                      <span className="absolute right-3 text-gray-400">
                        <FaCaretDown />
                      </span>
                      <input
                        type="text"
                        placeholder="Zona"
                        className="flex items-center rounded-lg border p-1 border-gray-300 hover:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 border-b border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Modalidad de contrato</span>
                    <span className="text-xs">Limpiar</span>
                  </div>
                  <div className="mt-2">
                    <div className="relative flex items-center">
                      <span className="absolute right-3 text-gray-400">
                        <FaCaretDown />
                      </span>
                      <input
                        type="text"
                        placeholder="Modalidad de cont..."
                        className="flex items-center rounded-lg border p-1 border-gray-300 hover:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border-b border-gray-300">
                  <button className="text-xs rounded-xl border border-gray-300 p-2">
                    Limpiar
                  </button>
                  <button className="text-xs rounded-xl border border-gray-300 p-2 bg-sky-500 text-white">
                    Aplicar filtro
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex items-center ml-3">
            <span className="absolute right-3 text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Buscar"
              className="flex items-center rounded-l-lg border p-1 border-gray-300 hover:bg-blue-100"
            />
          </div>
          <div className="relative flex items-center">
            <span className="absolute right-3 text-gray-400">
              <FaCaretDown />
            </span>
            <input
              type="text"
              placeholder="Seleccionar"
              className="flex items-center rounded-r-lg border p-1 border-gray-300 hover:bg-blue-100"
            />
          </div>
          <button className="text-sm ml-3">Limpiar búsqueda</button>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
