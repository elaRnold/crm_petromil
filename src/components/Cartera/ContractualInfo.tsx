import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

const ContractualInfo = () => {
  const router = useRouter();

  const handleVolverClick = () => {
    router.push("/"); // Redirige a index
  };

  return (
    <div className="p-4 border-l max-w-sm min-w-80 max-h-[43rem] overflow-y-auto custom-scrollbar bg-white border-r-2">
      <div className="flex flex-col">
        <div>
          <button
            className="flex items-center font-medium hover:bg-sky-100 rounded-lg px-1"
            onClick={handleVolverClick}
          >
            <FaChevronLeft className="mr-2" /> Volver
          </button>
        </div>
        <div className="flex items-center justify-between mt-4 text-gray-500">
          <span className="font-bold text-lg">Info contractual</span>
          <div className="rounded-lg bg-gray-200 px-2">
            <span className="font-semibold text-black text-sm">
              3 CONTRATOS
            </span>
          </div>
        </div>

        <div className="rounded-lg bg-green-50 mt-4 p-2 border-2">
          <div className="flex justify-between items-center">
            <span className="text-xs">Contrato N°</span>
            <span className="text-xs">Vigencia</span>
          </div>

          <div className="flex justify-between mt-1 items-center">
            <span className="text-black text-xl font-bold">CS-22-251</span>
            <div className="rounded-lg bg-gray-300 px-4">
              <span className="font-semibold text-gray-700 text-sm">
                10 AÑOS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-5 gap-2 mt-4">
            <div className="flex flex-col">
              <span className="text-xs">Fecha inicio</span>
              <span className="font-bold text-black">01/05/22</span>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-xs">Fecha final</span>
              <span className="font-bold text-black">01/06/23</span>
            </div>

            <div className="row-start-2 flex flex-col">
              <span className="text-xs">Volumen pactado</span>
              <span className="font-bold text-black">44.084.000</span>
            </div>
            <div className="row-start-2 flex flex-col pl-2">
              <span className="text-xs">Galonaje comprado</span>
              <span className="font-bold text-black">3.068.488</span>
            </div>

            <div className="row-start-3 flex flex-col">
              <span className="text-xs">Prom. ventas GL mes</span>
              <span className="font-bold text-black">N/A</span>
            </div>
            <div className="row-start-3 flex flex-col pl-2">
              <span className="text-xs">Bonificación mes</span>
              <span className="font-bold text-black">150 x GL</span>
            </div>

            <div className="row-start-4 flex flex-col">
              <span className="text-xs">Anti. con la marca</span>
              <span className="font-bold text-black">N/A</span>
            </div>
            <div className="row-start-4 flex flex-col pl-2">
              <span className="text-xs">Ultima intervención</span>
              <span className="font-bold text-black">N/A</span>
            </div>

            <div className="row-start-5 flex flex-col">
              <span className="text-xs">Garantia de la EDS</span>
              <span className="font-bold text-black">N/A</span>
            </div>
            <div className="row-start-5 flex flex-col pl-2">
              <span className="text-xs">ppto. invertido</span>
              <span className="font-bold text-black">N/A</span>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <div className="shadow-md p-2 border-2 rounded-lg bg-white py-0 px-4">
              <button className="text-sm">Ver menos</button>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white mt-4 p-2 border-2">
          <div className="flex justify-between items-center">
            <span className="text-xs">Contrato N°</span>
            <span className="text-xs">Vigencia</span>
          </div>

          <div className="flex justify-between mt-1 items-center">
            <span className="text-black text-xl font-bold">CS-22-252</span>
            <div className="rounded-lg bg-gray-300 px-4">
              <span className="font-semibold text-gray-700 text-sm">
                7 AÑOS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-4">
            <div className="flex flex-col">
              <span className="text-xs">Fecha inicio</span>
              <span className="font-bold text-black">01/05/22</span>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-xs">Fecha final</span>
              <span className="font-bold text-black">N/A</span>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <div className="shadow-md p-2 border-2 rounded-lg bg-white py-0 px-4">
              <button className="text-sm">Ver mas</button>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white mt-4 p-2 border-2">
          <div className="flex justify-between items-center">
            <span className="text-xs">Contrato N°</span>
            <span className="text-xs">Vigencia</span>
          </div>

          <div className="flex justify-between mt-1 items-center">
            <span className="text-black text-xl font-bold">CS-21-721</span>
            <div className="rounded-lg bg-gray-300 px-4">
              <span className="font-semibold text-gray-700 text-sm">
                10 AÑOS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-4">
            <div className="flex flex-col">
              <span className="text-xs">Fecha inicio</span>
              <span className="font-bold text-black">01/05/22</span>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-xs">Fecha final</span>
              <span className="font-bold text-black">01/06/23</span>
            </div>
          </div>

          <div className="mt-2 flex justify-end">
            <div className="shadow-md p-2 border-2 rounded-lg bg-white py-0 px-4">
              <button className="text-sm">Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractualInfo;
