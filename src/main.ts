import { blue, green, red } from 'chalk';
import { deepStrictEqual } from 'node:assert';
import { findAverageTemperatureForHospitalAndReturnPatientAndRoomsCelsiusList } from './solution';
import { hospital } from './task';

const actualResult = findAverageTemperatureForHospitalAndReturnPatientAndRoomsCelsiusList(hospital);
console.log(actualResult);
/* Ожидаемый вывод:
{
  hospital: 'City General Hospital',
  average: 37.0425,
  patients: [
    { temperature: 37.81, room: 'B-456', name: 'David Lee' },
    { temperature: 37.4, room: 'D-246', name: 'Jack Thompson' },
    { temperature: 37.3, room: 'D-246', name: 'Henry Jones' },
    { temperature: 37.2, room: 'A-123', name: 'Bob Smith' },
    { temperature: 37.1, room: 'C-789', name: 'Frank Wilson' },
    { temperature: 36.9, room: 'B-456', name: 'Eve Miller' },
    { temperature: 36.8, room: 'A-123', name: 'Alice Johnson' },
    { temperature: 36.7, room: 'D-246', name: 'Ivy Williams' },
    { temperature: 36.6, room: 'D-246', name: 'Grace Davis' },
    { temperature: 36.5, room: 'B-456', name: 'Charlie Brown' }
  ],
  rooms: [
    { room: 'C-789', average: 37.1 },
    { room: 'B-456', average: 37.07 },
    { room: 'A-123', average: 37 },
    { room: 'D-246', average: 37 }
  ]
}
Успех! Поздравляю! Вы справились с этим заданием!
 */

// --- Проверка правильности работы  ---
const expectedResult = {
  hospital: 'City General Hospital',
  average: 37.0425,
  patients: [
    { temperature: 37.81, room: 'B-456', name: 'David Lee' },
    { temperature: 37.4, room: 'D-246', name: 'Jack Thompson' },
    { temperature: 37.3, room: 'D-246', name: 'Henry Jones' },
    { temperature: 37.2, room: 'A-123', name: 'Bob Smith' },
    { temperature: 37.1, room: 'C-789', name: 'Frank Wilson' },
    { temperature: 36.9, room: 'B-456', name: 'Eve Miller' },
    { temperature: 36.8, room: 'A-123', name: 'Alice Johnson' },
    { temperature: 36.7, room: 'D-246', name: 'Ivy Williams' },
    { temperature: 36.6, room: 'D-246', name: 'Grace Davis' },
    { temperature: 36.5, room: 'B-456', name: 'Charlie Brown' },
  ],
  rooms: [
    { room: 'C-789', average: 37.1 },
    { room: 'B-456', average: 37.07 },
    { room: 'A-123', average: 37 },
    { room: 'D-246', average: 37 },
  ],
};

try {
  // Бросит ошибку если значения не совпадают
  deepStrictEqual(actualResult, expectedResult);
  console.log(green('Успех!'), blue('Поздравляю! Вы справились с этим заданием!'));
} catch (error) {
  console.log(red('Ошибка!'), blue('Реальный результат отличается от ожидаемого!'));
  process.exit(1);
}
