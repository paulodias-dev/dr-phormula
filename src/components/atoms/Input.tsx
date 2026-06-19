import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  type = "text",
  ...props
}: InputProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  
  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label htmlFor={inputId} className="font-medium text-sm text-on-surface/80 tracking-wide">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        className={`w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all duration-200 outline-none text-base placeholder-on-surface-variant/40 ${
          error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500 font-medium">{error}</span>}
    </div>
  );
}
