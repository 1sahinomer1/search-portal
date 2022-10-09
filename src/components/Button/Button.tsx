import * as S from "./styles";
import { ButtonTypes } from "./types";

const Button = ({
  children,
  type,
  onClick,
  margin,
  disabled,
  ...props
}: ButtonTypes) => {
  return (
    <S.Button
      margin={margin}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
