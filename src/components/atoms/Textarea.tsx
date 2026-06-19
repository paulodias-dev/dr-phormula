import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  className = "",
  id,
  rows = 3,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-2 w-full text-left">
      <label htmlFor={textareaId} className="font-medium text-sm text-on-surface/80 tracking-wide">
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface transition-all duration-200 outline-none text-base placeholder-on-surface-variant/40 resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
