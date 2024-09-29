/*
  Исправьте фрагмент программы, чтобы она работала как ожидается
 */

type WebMaster = {
  nick: string;
  followers: number;
  isPro: boolean;
  photo: string | null;
};

export const separator = '\t';

export const write = (master: WebMaster, separator: string) => {
  const { isPro, followers, nick, photo } = master;

  return [nick, followers, isPro, photo].map(String).join(separator);
};

export const parse = (raw: string, separator: string): WebMaster => {
  const [nick, followers, isPro, photo] = raw.split(separator);

  return {
    nick,
    followers: Number(followers),
    isPro: isPro === 'true',
    photo,
  };
};

const webmaster1: WebMaster = { nick: 'first', followers: 1, isPro: true, photo: null };
const webmaster2: WebMaster = { nick: 'second', followers: 2, isPro: false, photo: 'img-2' };

const rawWm1 = write(webmaster1, separator);
const rawWm2 = write(webmaster2, separator);

const parsedWm1 = parse(rawWm1, separator);
const parsedWm2 = parse(rawWm2, separator);

console.log(parsedWm1);
// Ожидаемый вывод: { nick: 'first', followers: 1, isPro: true, photo: null }
// Текущий вывод: { nick: 'first\t1\ttrue\tnull', followers: NaN, isPro: false, photo: undefined }

console.log(parsedWm2);
// Ожидаемый вывод: { nick: 'second', followers: 2, isPro: false, photo: 'img-2' }
// Текущий вывод: { nick: 'second\t2\tfalse\timg-2', followers: NaN, isPro: false, photo: undefined }
