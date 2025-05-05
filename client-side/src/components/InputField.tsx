import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  labelClassName?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  type,
  register,
  error,
  placeholder = "Enter text",
  maxLength = 30,
  className,
  labelClassName,
}) => {
  return (
    <div>
      {label && (
        <label className={`ml-1 ${labelClassName || ""}`}>{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={clsx(
          "border rounded-2xl w-full p-2 pl-5 mt-2",
          className,
          error ? "border-red-500" : "border-slate-400",
        )}
        {...register(name)}
      />
      {error && (
        <p className={`text-red-500 text-sm pt-2 pl-2 ${labelClassName}`}>
          {error.message} !
        </p>
      )}
    </div>
  );
};

export default InputField;
