import { InputProps } from "./types";
import { forwardRef } from "react";

import * as S from "./styles";
const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, placeholder, onChange, margin, error, ...props }, ref) => {
    return (
      <S.Container margin={margin}>
        {label && <S.Label error={error}>{label}</S.Label>}
        <S.Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          error={error}
          {...props}
        />
        {error && <S.Error data-testid="errorMessage">{error}</S.Error>}
      </S.Container>
    );
  }
);

export default FormInput;
