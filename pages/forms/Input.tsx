import { ComponentProps } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type FormInputProps<TFormValues extends FieldValues> = {
  className?: React.ComponentProps<"div">["className"];
  identifier: Path<TFormValues>;
  labelTitle: string;
  rules?: RegisterOptions;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  placeHolder: string;
  inputType?: "date" | "email" | "number" | "password" | "range" | "tel";
};

const Input = <TFormValues extends Record<string, unknown>>({
  className,
  identifier,
  error,
  labelTitle,
  register,
  rules,
  placeHolder,
  inputType,
}: FormInputProps<TFormValues>) => {
  return (
    <div className={className}>
      <label
        htmlFor={identifier}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelTitle}:
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={inputType ?? "text"}
        placeholder={placeHolder}
        {...(register && register(identifier, rules))}
      />

      <p className="text-red-700 font-semibold text-xs h-6">
        {error && error.message}
      </p>
    </div>
  );
};

export default Input;
