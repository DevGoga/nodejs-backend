export type Patient = {
  name: string;
  temperature: number;
};

export type Room = {
  name: string;
  patients: Patient[];
};

export type Hospital = {
  name: string;
  rooms: Room[];
};
