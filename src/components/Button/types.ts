export type ButtonTypes = {
  children: string;
  margin?: string;
  onClick?: () => void;
  disabled?: boolean | any;
  type?: "button" | "submit" | "reset";
};
