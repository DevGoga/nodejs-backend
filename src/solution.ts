// Определить единицы измерения по значению
import {
  HospitalMeasurementsResult,
  PatientMeasurementResult,
  RoomMeasurementsResult,
  TemperatureUnits,
} from './solution.types';
import { Hospital, Room } from './task.types';

export const defineTemperatureUnits = (value: number): TemperatureUnits => {
  // Я для ориентира взял опорную точку в 45 C

  // 45 C
  if (value > 122) {
    return 'K';
  }

  // 45 C
  if (value > 45) {
    return 'F';
  }

  return 'C';
};

// Переводит температуру из одних единиц в другие
export const convertTemperature = (value: number, fromUnits: TemperatureUnits, toUnits: TemperatureUnits): number => {
  let temperatureCelsius: number;

  switch (fromUnits) {
    case 'C':
      temperatureCelsius = value;
      break;
    case 'F':
      temperatureCelsius = ((value - 32) * 5) / 9;
      break;
    case 'K':
      temperatureCelsius = value - 273.15;
      break;
    default:
      throw new Error('Invalid fromUnits argument');
  }

  let result: number;
  switch (toUnits) {
    case 'C':
      result = temperatureCelsius;
      break;
    case 'F':
      result = (temperatureCelsius * 9) / 5 + 32;
      break;
    case 'K':
      result = temperatureCelsius + 273.15;
      break;
    default:
      throw new Error('Invalid toUnits argument');
  }

  return round(result);
};

// Обрезает число до fractionDigits после запятой
export const round = (value: number, fractionDigits = 3): number => {
  return parseFloat(value.toFixed(fractionDigits));
};

// Найти среднюю температуры комнаты и вернуть список пациентов с температурой в градусах Цельсия
export const findAverageTemperatureForRoomAndReturnPatientCelsiusList = (room: Room): RoomMeasurementsResult => {
  const patients: PatientMeasurementResult[] = [];

  const sum = room.patients.reduce((sum, patient) => {
    const { name, temperature } = patient;
    const inCelsius = convertTemperature(temperature, defineTemperatureUnits(temperature), 'C');

    patients.push({
      temperature: inCelsius,
      room: room.name,
      name,
    });

    return sum + inCelsius;
  }, 0);

  return {
    room: room.name,
    average: sum / 2,
    patients,
  };
};

// Найти среднюю температуры больницы и вернуть список пациентов с температурой в градусах Цельсия, отсортированных по убыванию
export const findAverageTemperatureForHospitalAndReturnPatientAndRoomsCelsiusList = (
  hospital: Hospital,
): HospitalMeasurementsResult => {
  const patients: PatientMeasurementResult[] = [];
  const rooms: HospitalMeasurementsResult['rooms'] = [];

  const sum = hospital.rooms.reduce((sum, room) => {
    const measurementsForRoom = findAverageTemperatureForRoomAndReturnPatientCelsiusList(room);

    patients.push(...measurementsForRoom.patients);
    rooms.push({
      room: measurementsForRoom.room,
      average: measurementsForRoom.average,
    });

    return sum + measurementsForRoom.average;
  }, 0);

  return {
    hospital: hospital.name,
    average: sum / hospital.rooms.length,
    patients,
    rooms,
  };
};
