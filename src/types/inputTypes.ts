type inputsObjType = {
  id: string;
  type: string;
  value?: string | number;
  placeholder?: string;
};

export interface inputsType {
  label?: string;
  input: inputsObjType;
  onChange: (event: any) => void;
  onBlur?: () => void;
  onClick?: () => void;
}
