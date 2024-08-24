// Используя reduce, напишите функцию, которая превращает массив в объект. Считает количество
// заявок в каждом статусе - отклонено, ожидание, подтверждено.
type TicketStatus = 'approved' | 'pending' | 'declined';

type Ticket = { id: number; title: string; status: TicketStatus };

const tickets: Ticket[] = [
  { id: 1, title: 'Закупка молока, 107л', status: 'approved' },
  { id: 2, title: 'Кошачий корм, 45т', status: 'pending' },
  { id: 3, title: 'Свиньи, 9шт', status: 'declined' },
  { id: 4, title: 'Дерево, 700м3', status: 'pending' },
  { id: 5, title: 'Вода, 200т', status: 'approved' },
  { id: 6, title: 'Сухарики, 3уп', status: 'approved' },
];

let count1 = 0;
let count2 = 0;
let count3 = 0;
const counts = tickets.reduce((acc, cur) => {
  const key = cur.status;
  if (cur.status === 'approved') {
    count1++;
    acc[key] = count1;
  }
  if (cur.status === 'declined') {
    count2++;
    acc[key] = count2;
  }
  if (cur.status === 'pending') {
    count3++;
    acc[key] = count3;
  }
  return acc;
}, {} as any);
console.log(counts);
