type GetTypeByPosition <T extends any[], N extends number> = N extends keyof T? T[N] : undefined

type Tuple1 = [string, number];
const nick: GetTypeByPosition<Tuple1, 0> = 'example'; // string
const age: GetTypeByPosition<Tuple1, 1> = 200; // number

type Tuple2 = [boolean, string];
const isReady: GetTypeByPosition<Tuple2, 0> = true; // boolean
const surname: GetTypeByPosition<Tuple2, 1> = 'example'; // string
const bad: GetTypeByPosition<Tuple2, 5> = undefined; // undefined