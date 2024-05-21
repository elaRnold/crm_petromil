import { StationCardPropsWithSelection } from "@/interfaces/StationCardProps";
import { FaEllipsisV } from "react-icons/fa";

const StationCard: React.FC<StationCardPropsWithSelection> = ({
  name,
  industrial,
  numContrato,
  progress,
  isActive,
  isSelected,
  onSelect,
}) => {
  return (
    <div className={`flex items-center justify-between mb-2 p-2 border-b border-gray-200 last:border-white ${isSelected ? 'bg-green-50' : 'bg-white'}`}>
      <div className="flex items-center">
        <div
          className="p-4 flex items-center"
        >
          <input
            type="radio"
            checked={isSelected}
            onChange={onSelect}
            className="h-5 w-5"
          />
        </div>
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
      <div className="flex items-center">
        <p className="text-sm ml-2 mr-6 font-medium">{industrial}</p>
        <p className="text-sm ml-2 mr-6 font-medium">{numContrato}</p>
        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm ml-2 mr-6 font-semibold">{progress}%</p>
        <div className="rounded bg-green-100">
          <span
            className={`text-sm font-semibold px-2 ${
              isActive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isActive ? "Activo" : "Inactivo"}
          </span>
        </div>
        <FaEllipsisV className="ml-2" />
      </div>
    </div>
  );
};

export default StationCard;
