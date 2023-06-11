"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardsOption() {
  return (
    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
      <div className="mx-auto grid gap-6 md:w-3/5 lg:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
          <div className="mb-12 space-y-4">
            <h3 className="text-2xl font-semibold text-purple-900">
              Bot Masivo
            </h3>
            <p className="mb-6">
              Poder enviar mensaje a uno cantidad de personas preescritas en un
              archivo.
            </p>
            <Link href="/massive" className="block font-medium text-purple-60">
              Bot Masivo
            </Link>
          </div>
          <Image
            src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
            className="w-2/3 ml-auto -mb-12"
            alt="illustration"
            loading="lazy"
            width="900"
            height="600"
          />
        </div>
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
          <div className="mb-12 space-y-4">
            <h3 className="text-2xl font-semibold text-purple-900">
              Bot con QR
            </h3>
            <p className="mb-6">
              En este apartado puede escanear el QR para que pueda conectar el
              bot.
            </p>
            <Link href="/bot" className="block font-medium text-purple-600">
              Conectar con el QR
            </Link>
          </div>
          <Image
            src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
            className="w-2/3 ml-auto"
            alt="illustration"
            loading="lazy"
            width="900"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}
