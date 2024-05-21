import { Station } from "./StationDataProps";

export interface StationListProps {
  setSelectedStation: (station: Station) => void;
  selectedStation: Station | null;
}
