import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ className = "", ...props }: Props) {
  return (
    <textarea
      className={[
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-500 focus:border-blue-600",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
