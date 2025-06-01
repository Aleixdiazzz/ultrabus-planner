export interface ServiceCard {
  id: number;
  origin: string;
  destination: string;
  serviceType: string;
  departureTime: string;
  arrivalTime: string;
  passengerCount: number;
  notes: string;
  driverId?: number;
  expanded?: boolean;
}
