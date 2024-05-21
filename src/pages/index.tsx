import FilterBar from "@/components/Home/FilterBar";
import StationDetails from "@/components/Home/StationDetails";
import StationList from "@/components/Home/StationList";
import { Station } from "@/interfaces/StationDataProps";
import { useState } from "react";

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  return (
    <main>
      <div className="flex min-w-[80rem]">
        <div className="flex-grow p-4 bg-gray-100">
          <div className="min-h-full bg-white p-4 border rounded-xl">
            <FilterBar />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">
                Zona Atlántico - Magdalena
              </h1>
              <StationList
                setSelectedStation={setSelectedStation}
                selectedStation={selectedStation}
              />
            </div>
          </div>
        </div>
        {selectedStation ? (
          <div className="p-4 border-l max-w-sm min-w-96">
            <StationDetails station={selectedStation} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
}
