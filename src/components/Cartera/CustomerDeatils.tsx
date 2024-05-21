import { SetStateAction, useState } from "react";
import { FaChartLine, FaChevronRight, FaEllipsisV } from "react-icons/fa";
import Image from "next/image";
import Chart from "../../../public/img/chart.png";
import { useRouter } from "next/router";

const CustomerDetails = () => {
  const [selectedOption, setSelectedOption] = useState("Ccorriente"); // 'Ccorriente' o 'Tcliente' o 'Vanual'
  const [isClickedChart, setIsClickedChart] = useState(false);

  const handleClick = () => {
    setIsClickedChart(!isClickedChart);
  };

  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
  };

  const router = useRouter();
  
  const GroupClick = () => {
    router.push('/group'); // Redirige a la página "/cartera"
  };

  return (
    <div className="flex-grow p-4 min-h-full bg-white">
      <div className="bg-white border-2 rounded-t-xl">
        <div className="flex flex-col">
          <div className="grid grid-cols-6 px-4 pt-4 grid-rows-2 gap-x-0 gap-y-1">
            <div>
              <span className="text-xs">Cliente</span>
            </div>
            <div className="col-start-1 col-span-2 row-start-2">
              <span className="text-lg font-bold text-black">
                Grupo Administrativo Kamel S...
              </span>
            </div>
            <div className="col-start-3 row-start-1">
              <span className="text-xs">Grupo familiar</span>
            </div>
            <div className="col-start-3 row-start-2">
              <button onClick={GroupClick} className="flex items-center text-sm text-blue-700 font-bold hover:bg-blue-100 rounded-lg px-1">
                Kamel Group <FaChevronRight className="ml-2" />
              </button>
            </div>
            <div className="col-start-4 row-start-1">
              <span className="text-xs">Estado de venta</span>
            </div>
            <div className="col-start-4 row-start-2">
              <div className=" bg-green-100 rounded-lg inline-block px-2">
                <span className="text-sm font-semibold text-teal-400">
                  ACTIVO
                </span>
              </div>
            </div>
            <div className="col-start-5 row-start-1">
              <span className="text-xs">EDS</span>
            </div>
            <div className="col-start-5 row-start-2">
              <div className=" bg-gray-200 rounded-lg inline-block px-2">
                <span className="text-sm font-semibold text-black">9 EDS</span>
              </div>
            </div>
            <div className="col-start-6 row-start-1">
              <span className="text-xs">Ciudad</span>
            </div>
            <div className="col-start-6 row-start-2">
              <div className=" bg-gray-200 rounded-lg inline-block px-2">
                <span className="text-sm font-semibold text-black">
                  7 CIUDADES
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 px-4 pb-4 grid-rows-2 gap-x-0 gap-y-1 mt-4">
            <div>
              <span className="text-xs">Departamento</span>
            </div>
            <div className="col-start-1 col-span-2 row-start-2">
              <span className="text-sm font-bold text-black">
                N de Santander
              </span>
            </div>
            <div className="col-start-2 row-start-1">
              <span className="text-xs">Direción</span>
            </div>
            <div className="col-start-2 row-start-2">
              <span className="text-sm text-black font-bold">
                Cra 10A No. 70-20
              </span>
            </div>
            <div className="col-start-3 row-start-1">
              <span className="text-xs">Representante Legal</span>
            </div>
            <div className="col-start-3 row-start-2">
              <span className="text-sm font-bold text-black">
                Sandra Milena M...
              </span>
            </div>
            <div className="col-start-4 row-start-1">
              <span className="text-xs">Analista de cartera</span>
            </div>
            <div className="col-start-4 row-start-2">
              <span className="text-sm font-bold text-black">
                Monica Bolaños
              </span>
            </div>
            <div className="col-start-5 row-start-1">
              <span className="text-xs">Asesor comercial</span>
            </div>
            <div className="col-start-5 row-start-2">
              <span className="text-sm font-bold text-black">Yamil Egel</span>
            </div>
          </div>

          <div className="border-t-2 px-4">
            <div className="mt-4">
              <button
                onClick={() => handleOptionClick("Ccorriente")}
                className={`px-2 hover:bg-sky-100 text-sm ${
                  selectedOption === "Ccorriente"
                    ? "border-b-4 border-sky-600"
                    : "border-b-4 border-transparent"
                }`}
              >
                Cartera corriente
              </button>
              <button
                onClick={() => handleOptionClick("Tcliente")}
                className={`px-2 hover:bg-sky-100 text-sm ${
                  selectedOption === "Tcliente"
                    ? "border-b-4 border-sky-600"
                    : "border-b-4 border-transparent"
                }`}
              >
                Total cartera cliente
              </button>
              <button
                onClick={() => handleOptionClick("Vanual")}
                className={`px-2 hover:bg-sky-100 text-sm ${
                  selectedOption === "Vanual"
                    ? "border-b-4 border-sky-600"
                    : "border-b-4 border-transparent"
                }`}
              >
                Volumen comprado anual
              </button>
            </div>
          </div>
        </div>

        <div
          className="border-t-2 flex flex-col justify-between"
          style={{ height: "28rem" }}
        >
          <div className="px-4 pt-4">
            {selectedOption === "Ccorriente" ? (
              <>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Saldo en Cartera
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">967.084.207</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Días plazo cartera
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        5 Días / max. vigente
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Cupo de credito real
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        Cupo grupo $ 900M
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-32">
                        Cupo de credito calculado
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">0</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Edades de Cartera
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">N/A</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        Intereses de mora causados año 2022
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">36.053.978</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        Intereses de mora causados año 2023
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">163.786.853</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        Intereses de mora promedio mes
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">20.473.357</span>
                    </div>
                  </div>
                </div>
              </>
            ) : selectedOption === "Tcliente" ? (
              <>
                <div className="grid grid-cols-4 grid-rows-3 gap-4">
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Valor inicial del incentivo
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        1.090.000.000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Saldo incentivo
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">921.870.184</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Préstamo inicial
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        1.000.000.000
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-32">
                        Tasa de interes préstamo
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">1,1%</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Plazo del préstamo
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">84</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-36">
                        N° de cuotas pendientes
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">49</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-36">
                        N° de cuotas pagadas
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">35</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-28">
                        N° cuotas en mora
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-34">
                        Valor de las cuotas pendientes
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        $ 9.943.346,00
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-24">
                        Saldo pendiente
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        $ 690.357.899
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-32">
                        Valor Cuota mensual
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">$ 18.300.871</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-2 border-2 border-slate-100 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 w-32">
                        Total cartera Largo plazo
                      </span>
                      <FaEllipsisV />
                    </div>
                    <div>
                      <span className="text-black font-bold">
                        1.622.170.429
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex  justify-between">
                  <div className="min-w-[36rem]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 pl-4">EDS</span>
                        <select className="border-2 rounded-lg p-2 hover:bg-blue-100">
                          <option value="servicentro-omega">
                            Servicentro Omega
                          </option>
                          <option value="La Trinitaria">La Trinitaria</option>
                          <option value="La Carolina">La Carolina</option>
                          <option value="Los Mármoles">Los Mármoles</option>
                          <option value="Automotriz Shalom">
                            Automotriz Shalom
                          </option>
                          <option value="Central DM">Central DM</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 pl-4">Años</span>
                        <select className="border-2 rounded-lg p-2 hover:bg-blue-100">
                          <option value="1-anos">1 Años</option>
                          <option value="2-anos">2 Años</option>
                          <option selected value="3-anos">
                            3 Años
                          </option>
                          <option value="4-anos">4 Años</option>
                          <option value="5-anos">5 Años</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-transparent pl-4">
                          Años
                        </span>
                        <button
                          onClick={handleClick}
                          className={`border-2 rounded-lg p-3 px-4 hover:bg-blue-100 ${
                            isClickedChart
                              ? "bg-blue-500 text-white"
                              : "bg-white"
                          }`}
                        >
                          <FaChartLine />
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-transparent pl-4">
                          Años
                        </span>
                        <button className="border-2 rounded-lg p-2">
                          Comparativo
                        </button>
                      </div>
                    </div>
                    {!isClickedChart ? (
                      <>
                        <div className="flex border-2 border-blue-100 rounded-lg overflow-hidden max-h-[21.5rem] overflow-y-auto custom-scrollbar">
                          <table className="table-auto w-full ">
                            <thead>
                              <tr>
                                <th className="border-b-2 border-r-2 border-blue-100">
                                  Meses
                                </th>
                                <th className="border-b-2 border-r-2 border-blue-100">
                                  2023
                                </th>
                                <th className="border-b-2 border-r-2 border-blue-100">
                                  2022
                                </th>
                                <th className="border-b-2 border-blue-100">
                                  2021
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Enero
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  33.759
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right p-2">0</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Febrero
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right p-2">0</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Marzo
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right p-2">0</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Abril
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right p-2">0</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Mayo
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  20.570
                                </td>
                                <td className="text-right p-2">21.918</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Junio
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">21.918</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Julio
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">32.797</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Agosto
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  0
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">33.759</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Septiembre
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  -
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  33.000
                                </td>
                                <td className="text-right p-2">21.918</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Octubre
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  -
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">33.275</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Noviembre
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  -
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">21.838</td>
                              </tr>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  Diciembre
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  -
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  47.847
                                </td>
                                <td className="text-right p-2">0</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td className="border-r-2 border-blue-100 p-2">
                                  <span className="p-4 border-2 rounded-lg font-bold text-black flex w-full border-blue-100">
                                    Totales
                                  </span>
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  <div className="text-right p-2 border-2 rounded-lg flex flex-col w-full justify-end border-blue-100">
                                    <span className="text-xs">
                                      total galones 2023
                                    </span>
                                    <span className="font-bold text-black">
                                      81.606
                                    </span>
                                  </div>
                                </td>
                                <td className="text-right border-r-2 border-blue-100 p-2">
                                  <div className="text-right p-2 border-2 rounded-lg flex flex-col w-full justify-end border-blue-100">
                                    <span className="text-xs">
                                      total galones 2022
                                    </span>
                                    <span className="font-bold text-black">
                                      344.406,00
                                    </span>
                                  </div>
                                </td>
                                <td className="text-right p-2">
                                  <div className="text-right p-2 border-2 rounded-lg flex flex-col w-full justify-end border-blue-100">
                                    <span className="text-xs">
                                      total galones 2021
                                    </span>
                                    <span className="font-bold text-black">
                                      187.423,00
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative w-[40rem] h-60 mt-16">
                          <Image src={Chart} alt="Chart" className="absolute inset-0 w-full h-full object-cover border" />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex mt-[.2rem]">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 pl-4">
                        Total volumen
                      </span>
                      <div className="border-2 rounded-lg p-2 text-sm">
                        $ 155.228.999
                      </div>
                    </div>

                    <div className="flex flex-col ml-4">
                      <span className="text-xs text-gray-400 pl-4">
                        Saldo Inicial
                      </span>
                      <div className="border-2 rounded-lg p-2 text-sm">
                        $ 155.228.999
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {selectedOption !== "Vanual" ? (
            <>
              <div className="border-x-2 border-t-2 rounded-t-lg mx-4 mt-6 px-4 py-4 flex items-end justify-between">
                <div className="flex">
                  <div className="flex flex-col">
                    <span className="text-black">Cartera corriente</span>
                    <span className="text-black font-bold">$ 967.084.207</span>
                  </div>
                  <div className="flex flex-col ml-24">
                    <span className="text-black">Cartera largo plazo</span>
                    <span className="text-black font-bold">
                      $ 1.622.170.429
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-black ">Total cartera cliente</span>
                  <span className="font-bold text-blue-700 text-2xl">
                    $ 2.589.254.636
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
