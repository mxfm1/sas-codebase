import React from "react";

export default function Separator({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center my-4 mx-2">
      <div className="h-px flex-1 bg-gray-300"></div>
      {label && (
        <span className="px-2 text-sm text-gray-500">{label}</span>
      )}
      <div className="h-px flex-1 bg-gray-300"></div>
    </div>
  );
}