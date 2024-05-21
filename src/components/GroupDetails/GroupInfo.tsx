import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

const GroupInfo = () => {
  const router = useRouter();

  const handleVolverClick = () => {
    router.push("/"); // Redirige a index
  };

  const handleCarteraClick = () => {
    router.push("/cartera"); // Redirige a index
  };

  return (
    <div className="border-2 rounded-t-lg px-6 py-2">
      <div>
        <div>
          <button
            className="flex items-center font-medium hover:bg-sky-100 rounded-lg px-1"
            onClick={handleVolverClick}
          >
            <FaChevronLeft className="mr-2" /> Volver
          </button>
        </div>
        <div className="flex items-center mt-4 text-gray-500">
          <span className="font-bold text-3xl text-black">Kamel Group</span>
          <div className="ml-12 flex justify-between w-[22rem]">
            <div className="rounded-lg bg-gray-200 px-4 mr-2">
              <span className="font-semibold text-black text-sm">
                3 CONTRATOS
              </span>
            </div>
            <div className="rounded-lg bg-gray-200 px-4 mr-2">
              <span className="font-semibold text-black text-sm">11 EDS</span>
            </div>
            <button
              onClick={handleCarteraClick}
              className="rounded-lg bg-blue-700 px-4 mr-2 hover:bg-sky-100 text-white hover:text-black text-sm"
            >
              <span className="font-semibold">Ver cartera</span>
            </button>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
