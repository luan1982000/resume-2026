import { FC, ReactElement } from "react";
import "./styles.css";

type Props = {
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  children?: string | ReactElement;
  afterFix?: string | ReactElement;
};

export const Button: FC<Props> = ({ buttonProps, children, afterFix }) => {
  return (
    <button
      {...buttonProps}
      className={`${
        buttonProps?.className || ""
      } btn border-solid border-primary border rounded-full`}
    >
      <div
        className={`z-10 btn-text text-typography ${afterFix ? "has-after-fix" : ""}`}
      >
        {children}
      </div>
      {afterFix ? <div className="after-fix">{afterFix}</div> : null}
    </button>
  );
};
