interface StationCardProps {
  name: string;
  industrial: string;
  numContrato: string;
  progress: number;
  isActive: boolean;
}

export interface StationCardPropsWithSelection extends StationCardProps {
  isSelected: boolean;
  onSelect: () => void;
}