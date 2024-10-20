import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>; // Register from react-hook-form
  error?: FieldError; // Error handling
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
        className={`border border-slate-400 rounded-2xl w-full p-2 pl-5 mt-2 ${className} ${
          error && `border-red-500`
        }`}
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
