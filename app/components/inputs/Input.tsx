"use client";
import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  disabled,
  errors,
}) => {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2 pt-1">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...(register(id), { required })}
          className={clsx(
            `
          form-input
          block
          w-full
          rounded-md
          border-0
          py-1.5
          text-gray-900
          ring-1
          ring-inset
          ring-gray-300
          placeholder:to-gray-400
          focus:ring-green-700
          sm:text-sm
          sm:leading-6`,
            errors[id] && "focus:ring-red-600",
            disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
