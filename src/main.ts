enum Colors {
  red = 'red',
  black = 'black',
}

const mapper = (value: string): Colors => {
  const colorsMapper = Object.values(Colors).find((color) => color === value);
  return colorsMapper || Colors.red;
};

const color1: Colors = mapper('red'); // red, вернулось Colors.red, так как есть совпадение
const color2: Colors = mapper('black'); // black, вернулось Colors.black, так как есть совпадение
const color3: Colors = mapper('it is not a color'); // red, вернулось Colors.red "по умолчанию"

console.log(color1, color2, color3);
