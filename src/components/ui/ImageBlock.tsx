"use client";

import { useState } from "react";
import { ImageIcon, Sparkles } from "lucide-react";

type ImageBlockProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
};

export function ImageBlock({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
}: ImageBlockProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-50 via-slate-100 to-amber-100 ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
            <ImageIcon className="h-7 w-7" />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-800">{label}</p>
          <p className="mt-2 max-w-xs text-xs font-semibold leading-5 text-slate-500">
            Add image in public/images/main
          </p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 text-slate-950 shadow-lg backdrop-blur">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-700" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">{label}</p>
        </div>
      </div>
    </div>
  );
}
