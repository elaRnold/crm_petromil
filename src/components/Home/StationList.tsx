import React, { useState, useEffect } from "react";
import StationCard from "./StationCard";
import { Station, StationsData } from "@/interfaces/StationDataProps";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { StationListProps } from "@/interfaces/StationListProps";

const StationList: React.FC<StationListProps> = ({ setSelectedStation, selectedStation }) => {
  const [stations, setStations] = useState<StationsData | null>(null);
  const [visibleCities, setVisibleCities] = useState<{
    [city: string]: boolean;
  }>({});

  useEffect(() => {
    fetch("/data/stations.json")
      .then((response) => response.json())
      .then((data) => setStations(data));
  }, []);

  const toggleCityVisibility = (city: string) => {
    setVisibleCities((prevState) => ({
      ...prevState,
      [city]: !prevState[city],
    }));
  };

  const handleStationSelect = (station: Station) => {
    setSelectedStation(station);
  };

  if (!stations) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(stations).map(([city, stationList]) => (
        <div key={city}>
          <h2
            className="flex items-center text-sm font-bold pb-2 mt-4 border-b border-gray-600"
            onClick={() => toggleCityVisibility(city)}
          >
            {visibleCities[city] ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            {city}
          </h2>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              visibleCities[city] ? "max-h-screen" : "max-h-0"
            }`}
          ></div>
          {visibleCities[city] && (
            <div className="flex flex-col">
              {stationList.map((station) => (
                <StationCard
                  key={station.id}
                  name={station.name}
                  industrial={station.industrial}
                  numContrato={station.numContrato}
                  progress={station.progress}
                  isActive={station.isActive}
                  isSelected={selectedStation?.id === station.id}
                  onSelect={() => handleStationSelect(station)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StationList;
