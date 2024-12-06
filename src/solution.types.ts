import { Hospital, Patient, Room } from './task.types';

// Тип, определяющий возможные единицы измерения температуры. Celsius, Kelvin, Fahrenheit
export type TemperatureUnits = 'C' | 'K' | 'F';

// Тип - результат измерений для одного пациента
export type PatientMeasurementResult = Patient & {
  room: Room['name'];
};

// Тип - результат измерений для одной комнаты
export type RoomMeasurementsResult = {
  average: number;
  room: string;
  patients: PatientMeasurementResult[];
};

// Тип - результат измерений для одной больницы
export type HospitalMeasurementsResult = {
  hospital: Hospital['name'];
  average: number;
  patients: PatientMeasurementResult[];
  rooms: Omit<RoomMeasurementsResult, 'patients'>[];
};
