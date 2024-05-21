import { StationDetailsProps } from "@/interfaces/StationDetailsProps";
import Image from "next/image";
import barranquilla from "../../../public/img/Barranquilla.png";
import santamarta from "../../../public/img/SantaMarta.png";
import {
  FaChevronRight,
  FaFileCircleCheck,
  FaHandHoldingDollar
} from "react-icons/fa6";
import { TbFileCertificate } from "react-icons/tb";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/router";

const StationDetails: React.FC<StationDetailsProps> = ({ station }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedOption, setSelectedOption] = useState("time"); // 'time' or 'volume'
  const router = useRouter();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const handlePortfolioClick = () => {
    router.push('/cartera'); // Redirige a la página "/cartera"
  };

  return (
    <aside className="border-2 rounded-lg p-2 max-h-[120vh] overflow-y-auto custom-scrollbar">
      <div className="relative w-full h-48">
        <Image
          src={station.city == "Barranquilla" ? barranquilla : santamarta}
          alt="City"
          className="absolute inset-0 w-full h-full object-cover border rounded-t-md"
          layout="fill"
        />
      </div>
      <div className="flex align-top mb-1 mt-4 justify-between">
        <h2 className="text-3xl font-bold text-black">{station.name}</h2>

        <div className="flex flex-col p-1 w-28 items-end">
          <div className="bg-green-100 px-2 py-1 rounded-lg mt-2">
            <p className="text-xs font-semibold text-teal-400">ACTIVO</p>
          </div>
          <button onClick={handlePortfolioClick} className="mt-2 bg-blue-600 px-2 rounded-lg hover:bg-blue-100">
            <span className="text-xs text-white hover:text-black">Ver cartera</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-xs">Contrato N°</p>
          <p className="font-bold text-black">{station.numContrato}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs">Consumo traído al corte</p>
          <p className="text-xs">30/10/23</p>
        </div>
      </div>

      <div className="border-2 rounded-lg p-2 m-2">
        {selectedOption === "time" ? (
          <>
            <div className="border-2 rounded-lg p-3">
              <div>
                <div>
                  <p>Progreso de cumplimiento</p>
                </div>
                <div className="mt-2">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400"
                      style={{ width: `64%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-black font-bold">64%</p>
                  <p className="text-neutral-400 font-bold">-36%</p>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-lg p-3 mt-2">
              <div>
                <div>
                  <p>Progreso de reeaseguramiento</p>
                </div>
                <div className="mt-2">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400"
                      style={{ width: `64%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-black font-bold">64%</p>
                  <p className="text-neutral-400 font-bold">-36%</p>
                </div>
                <div className="mt-2">
                  <p className="text-xs">
                    Finalización del contrato{" "}
                    <span className="font-bold text-lg ml-2 text-black">
                      01/01/25
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border-2 rounded-lg p-3">
              <div>
                <div>
                  <p>Progreso de cumplimiento</p>
                </div>
                <div className="mt-2">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400"
                      style={{ width: `82%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-black font-bold">82%</p>
                  <p className="text-neutral-400 font-bold">-18%</p>
                </div>
              </div>
            </div>
            <div className="border-2 rounded-lg p-3 mt-2">
              <div>
                <div>
                  <p>Progreso de reeaseguramiento</p>
                </div>
                <div className="mt-2">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400"
                      style={{ width: `82%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-black font-bold">82%</p>
                  <p className="text-neutral-400 font-bold">-18%</p>
                </div>
                <div className="mt-2">
                  <p className="text-xs">
                    Volumen Consumido{" "}
                    <span className="font-bold text-lg ml-2 text-black">
                      123.456.789 Gal
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex border rounded-lg mt-4 mx-2 border-blue-700">
          <button
            onClick={() => handleOptionClick("time")}
            className={`flex-grow border-r rounded-l-lg ${(selectedOption === "time") ? "bg-sky-300" : "bg-white"} hover:bg-sky-100 border-blue-700 text-sm font-medium text-blue-700`}
          >
            Por tiempo
          </button>
          <button
            onClick={() => handleOptionClick("volume")}
            className={`flex-grow text-sm rounded-r-lg ${(selectedOption === "time") ? "bg-white" : "bg-sky-300"} hover:bg-sky-100 font-medium text-blue-700`}
          >
            Por volumen
          </button>
        </div>
      </div>

      <div className="flex justify-between m-4 mt-4">
        <div className="flex flex-col border-2 rounded-lg p-2 shadow-lg">
          <FaHandHoldingDollar color="blue" />
          <span className="mt-2">Inversión</span>
        </div>
        <div className="flex flex-col border-2 rounded-lg p-2 shadow-lg">
          <TbFileCertificate color="blue" />
          <span className="mt-2">Garantías</span>
        </div>
        <div className="flex flex-col border-2 rounded-lg p-2 shadow-lg">
          <FaFileCircleCheck color="blue" />
          <span className="mt-2">Aprobación</span>
        </div>
      </div>

      <div className="p-1 mx-2 mt-6 w-fit rounded-lg bg-sky-100 hover:bg-sky-300 hover:text-white text-xs font-medium text-blue-700">
        <button className="" onClick={toggleDetails}>
          {showDetails
            ? "Ocultar detalles de cliente"
            : "Mostrar detalles de cliente"}
        </button>
      </div>

      <div className="flex justify-between mt-4 mx-2">
        <div className="flex flex-col">
          <span className="text-xs">Código SICOM</span>
          <span className="font-bold text-black">123456</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Razón Social</span>
          <span className="flex items-center font-bold text-black">
            Pelican Oil S.A.S <FaChevronRight color="blue" />
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-2 mx-2">
        <div className="flex flex-col">
          <span className="text-xs">NIT</span>
          <span className="font-bold text-black">123456789-0</span>
        </div>
        <div className="flex flex-col" style={{ marginRight: "4.8rem" }}>
          <span className="text-xs">Tipo contrato</span>
          <span className="flex items-center font-bold text-black">SC</span>
        </div>
      </div>

      {showDetails && (
        <div className="grid grid-cols-2 grid-rows-6 gap-2 mt-3 mx-2">
          <div className="flex flex-col">
            <span className="text-xs">Clase Contrato</span>
            <span className="font-bold text-black">MultiPDS</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xs">Grupo Familiar </span>
            <span className="flex items-center font-bold text-black">
              Pelican Group <FaChevronRight color="blue" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs">Fecha Suscripción</span>
            <span className="font-bold text-black">01/03/22</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xs">Fecha Inicio</span>
            <span className="font-bold text-black">01/03/22</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs">Fecha vencimiento</span>
            <span className="font-bold text-black">01/01/25</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xs">Plazo (Tiempo)</span>
            <span className="font-bold text-black">120 meses</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs">Plazo (Volumen)</span>
            <span className="font-bold text-black">99.999.999 Gal</span>
          </div>
          <div></div>

          <div className="flex flex-col">
            <span className="text-xs">Galonaje est. mensual</span>
            <span className="font-bold text-black">12.345.678,99 Gal</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xs">Cupo Crédito</span>
            <span className="font-bold text-black">$234.567.890</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs">Días de Gracia</span>
            <span className="font-bold text-black">12</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-xs">Días de Plazo</span>
            <span className="font-bold text-black">30 días</span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default StationDetails;
