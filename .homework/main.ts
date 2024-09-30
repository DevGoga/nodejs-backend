const convert: any = (num: number) => {
  switch (true) {
    case num >= 1000:
      return 'M' + convert(num - 1000);
    case num >= 900:
      return 'CM' + convert(num - 900);
    case num >= 500:
      return 'D' + convert(num - 500);
    case num >= 400:
      return 'CD' + convert(num - 400);
    case num >= 100:
      return 'C' + convert(num - 100);
    case num >= 90:
      return 'XC' + convert(num - 90);
    case num >= 50:
      return 'L' + convert(num - 50);
    case num >= 40:
      return 'XL' + convert(num - 40);
    case num >= 10:
      return 'X' + convert(num - 10);
    case num >= 9:
      return 'IX' + convert(num - 9);
    case num >= 5:
      return 'V' + convert(num - 5);
    case num >= 4:
      return 'IV' + convert(num - 4);
    case num >= 1:
      return 'I' + convert(num - 1);
    default:
      return '';
  }
};
console.log(convert(2024));
