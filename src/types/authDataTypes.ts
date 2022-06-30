export interface IAuth {
  email: string;
  token: string;
  id: string;
}

export interface IAuthForm {
  title: string;
  submitHandler: (email: string, password: string) => void;
  authLink: JSX.Element;
}
