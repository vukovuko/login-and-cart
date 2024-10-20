import React, { useState, useRef } from "react";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => {
  const labelRef = useRef<HTMLLabelElement | null>(null);

  const handleFocus = () => {
    if (labelRef.current) {
      labelRef.current.classList.add(
        "-top-[24px]",
        "text-black",
        "text-[12px]",
        "leading-[12px]",
        "tracking-[0.02em]",
      );
      labelRef.current.classList.remove(
        "top-1/2",
        "transform",
        "-translate-y-1/2",
        "text-[#757575]",
        "text-[16px]",
        "leading-[28px]",
        "tracking-[0em]",
      );
    }
  };

  const handleBlur = () => {
    if (!value && labelRef.current) {
      labelRef.current.classList.remove(
        "-top-[24px]",
        "text-black",
        "text-[12px]",
        "leading-[12px]",
        "tracking-[0.02em]",
      );
      labelRef.current.classList.add(
        "top-1/2",
        "transform",
        "-translate-y-1/2",
        "text-[#757575]",
        "text-[16px]",
        "leading-[28px]",
        "tracking-[0em]",
      );
    }
  };

  return (
    <div className="flex flex-col relative">
      <label
        ref={labelRef}
        className={`absolute transition-all duration-150 ease-in-out ${
          value
            ? "text-black text-[12px] leading-[12px] tracking-[0.02em] -top-[24px] left-0"
            : "text-[#757575] text-[16px] leading-[28px] tracking-[0em] top-1/2 left-0 transform -translate-y-1/2"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="pt-2 pb-2 border-b border-gray-400 focus:outline-none focus:border-black transition duration-150 ease-in-out"
        required
      />
    </div>
  );
};

export default FloatingLabelInput;
