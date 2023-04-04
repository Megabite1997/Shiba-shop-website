import React, { useRef, useImperativeHandle } from "react";

type InputProps = {
  label: string;
  type: string;
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // const inputRef = useRef();

  // const activate = () => {
  //   inputRef.current.focus();
  // };

  // useImperativeHandle(ref, () => {
  //   return {
  //     focus: activate,
  //   };
  // });

  return (
    <div>
      <label>{props.label}</label>
      <div>
        <input ref={ref} type={props.type} className={props.className} />
      </div>
    </div>
  );
});

export default Input;
