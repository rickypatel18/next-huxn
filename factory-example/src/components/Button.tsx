import type { ButtonProps } from "../utils/types";

const Button = ({ label, onclick, disabled }: ButtonProps) => {
  return (
    <button onClick={onclick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
