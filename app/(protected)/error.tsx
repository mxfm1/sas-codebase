"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const isDev = process.env.NODE_ENV === "development"

  if(isDev){
    useEffect(() => {
      console.error(error)
    },[error])
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 w-full">
      <div className="p-4 rounded-md shadow-xl text-red-500">
        <h1 className="text-center text-2xl">Woops, hubo un error</h1>
        <p className="mt-4">Hubo un problema al cargar la aplicación. Intenta nuevamente más tarde.</p>
        <div className="flex items-center justify-between pt-8 px-28">
          <Button
            className="text-white bg-red-500 rounded-md p-2 hover:bg-red-400 flex items-center gap-2 px-4"
            onClick={reset}
          >
            <RotateCcw />
            Recargar
          </Button>
          <Link href="/" >
            <Button className="flex items-center gap-2">
              <ArrowLeft />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
