export interface Station {
  id: number;
  name: string;
  industrial: string;
  numContrato: string;
  progress: number;
  isActive: boolean;
  city: string;
}

export interface StationsData {
  [city: string]: Station[];
}
