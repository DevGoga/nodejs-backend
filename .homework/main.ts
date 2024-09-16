type DeepRequired <T extends object> = {
  [key in keyof T]-?: T[key] extends object ? DeepRequired<T[key]> : T[key]
};

type Profile = {
  id: number;
  email: string;
  private: {
    password: string;
    secretKey: string;
    restoreKey: number;
  };
  a: {
    email: string;
    password: string;
  };
};

type A = DeepRequired<Profile>;
const a: A = {id: 10, email: 'goga@mail.ru', private: { password: '123', secretKey: '123', restoreKey: 1 }, a: {email: 'giga@mail.ru', password: '123'}};
