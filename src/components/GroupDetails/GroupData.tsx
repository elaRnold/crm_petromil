const GroupData = () => {
  return (
    <div className="flex flex-col justify-between border-x-2 border-b-2 px-4 pt-2 min-h-[33rem] rounded-b-lg">
      <div className="border-2 rounded-lg flex flex-col overflow-hidden max-h-[26rem] overflow-y-auto custom-scrollbar">
        <div className="p-4">
          {/* <!-- Información de la empresa --> */}
          <div className="flex space-x-4 border-x-2 border-t-2 rounded-t-lg w-fit py-1 px-4">
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">
                Razón social
              </p>
              <p className="font-bold text-black">Grupo administrativo Kamel</p>
            </div>
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">Contrato Nº</p>
              <p className="font-bold text-black">CS-22-252</p>
            </div>
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">Vigencia</p>
              <p className="font-bold text-black">10 años</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">
                Fecha inicio
              </p>
              <p className="font-bold text-black">01/06/22</p>
            </div>
          </div>

          {/* <!-- Tabla --> */}
          <div className="overflow-x-auto rounded-b-lg">
            <table className="min-w-full border-x-2 border-b-2 rounded-b-lg">
              <thead className="">
                <tr>
                  <th className="border p-2 text-left text-sm text-gray-400">
                    Razón social
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Volumen Pactado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Volumen Comprado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Vol. PDTE por compra
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Corriente
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Largo plazo
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    DCTO anticipado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Mobil 3
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    848.915
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    967.084.207
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Troncal Nº 2
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    662.612
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS La Trinitaria
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    317.739
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS La Carolina
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    639.968
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Los Marmoles
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-sm text-black">
                    <span className="bg-sky-100 px-6 py-1 rounded-lg">
                      42.084.000
                    </span>
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    118.642
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-sm text-black">
                    <span className="bg-sky-100 px-6 py-1 rounded-lg">
                      39.015.512
                    </span>
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none0 p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Servicentro Omega
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    426.012
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Shalom
                  </td>

                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    54.600
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Mixta Palermo
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr className="">
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Central DM
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4">
          {/* <!-- Información de la empresa --> */}
          <div className="flex space-x-4 border-x-2 border-t-2 rounded-t-lg w-fit py-1 px-4">
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">
                Razón social
              </p>
              <p className="font-bold text-black">Grupo administrativo Kamel</p>
            </div>
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">Contrato Nº</p>
              <p className="font-bold text-black">CS-22-252</p>
            </div>
            <div className="mr-4">
              <p className="text-sm font-semibold text-gray-400">Vigencia</p>
              <p className="font-bold text-black">10 años</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">
                Fecha inicio
              </p>
              <p className="font-bold text-black">01/06/22</p>
            </div>
          </div>

          {/* <!-- Tabla --> */}
          <div className="overflow-x-auto rounded-b-lg">
            <table className="min-w-full border-x-2 border-b-2 rounded-b-lg">
              <thead className="">
                <tr>
                  <th className="border p-2 text-left text-sm text-gray-400">
                    Razón social
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Volumen Pactado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Volumen Comprado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Vol. PDTE por compra
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Corriente
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Largo plazo
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    DCTO anticipado
                  </th>
                  <th className="border p-2 text-right text-sm text-gray-400">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Mobil 3
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    848.915
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    967.084.207
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    700.300.245
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Troncal Nº 2
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    662.612
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS La Trinitaria
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    317.739
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS La Carolina
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    639.968
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Los Marmoles
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-sm text-black">
                    <span className="bg-sky-100 px-6 py-1 rounded-lg">
                      42.084.000
                    </span>
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    118.642
                  </td>
                  <td className="border-none p-2 text-right font-semibold text-sm text-black">
                    <span className="bg-sky-100 px-6 py-1 rounded-lg">
                      39.015.512
                    </span>
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none0 p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Servicentro Omega
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    426.012
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    Shalom
                  </td>

                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right font-semibold text-black">
                    54.600
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Mixta Palermo
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
                <tr className="">
                  <td className="border-none p-2 text-left font-semibold text-black">
                    EDS Central DM
                  </td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                  <td className="border-none p-2 text-right">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="border-x-2 border-t-2 rounded-t-lg mt-4 px-4 pt-4 pb-1">
        <div className="flex justify-between items-end">
          <div className="pb-2">
            <span className="text-black font-bold text-lg">Gran Totales</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Volumen pactado</span>
            <span className="text-black font-bold">67.794.840</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Volumen comprado</span>
            <span className="text-black font-bold">4.312.176</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Volumen PDTE por compra</span>
            <span className="text-black font-bold">$ 63.482.664</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Corriente</span>
            <span className="text-black font-bold">$ 977.176.651</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">Largo Plazo</span>
            <span className="text-black font-bold">$ 700.300.245</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs">DCTO Anticipado</span>
            <span className="text-black font-bold">$ 922.326.857</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg">Total</span>
            <span className="text-blue-700 font-bold">$ 2.599.803.753</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupData;
