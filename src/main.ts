const original = 'the quick brown fox jumps over the lazy dog';
const copy = 'sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf';
const convert = 'xnt gzud lzjhmf fqdzs oqnfqdrr hm kdzqmhmf izuzrbqhos. bnmfqzsr!';
const dict: any = {};
let result = '';

const word = (wordOrig: string, wordCopy: string) => {
  for (let i = 0; i < original.length; i++) {
    dict[wordCopy[i]] = wordOrig[i];
  }
  for (const text of convert) {
    result += dict[text] ?? text;
  }
  return result;
};

console.log(word(original, copy));
