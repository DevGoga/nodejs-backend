type DeepPartial1 <T extends object> = {
  [key in keyof T]?: T[key] extends object ? DeepPartial1<T[key]> : T[key]
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
    b: {
      c: {
        d: number;
      };
    };
  };
};

type A = DeepPartial1<Profile>;
const a: A = {};
const b: A = { a: {} };
const c: A = { a: { b: { c: {} } } };