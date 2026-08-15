"use client";

import Image from "next/image";
import { Title } from "../title";
import tcbQr from "@/assest/image/jpg/tcb-qr.jpg";
import momoQr from "@/assest/image/jpg/momo-qr.jpg";
import { useEffect, useState } from "react";

const SteamParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {[...Array(6)].map((_, i) => (
      <span
        key={i}
        className="absolute w-1 h-1 rounded-full bg-amber-400/30"
        style={{
          left: `${15 + i * 14}%`,
          bottom: "-4px",
          animation: `steam-rise ${2.5 + i * 0.7}s ease-out ${i * 0.6}s infinite`,
        }}
      />
    ))}
  </div>
);

export const BuyMeCoffee = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Title>Buy me a coffee</Title>

      {/* Header */}
      <div className="mt-8 text-center max-w-2xl mx-auto mb-16 px-4">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="block w-12 h-[1px] bg-amber-500/40" />
          <span className="text-amber-500/60 text-sm tracking-[0.3em] uppercase font-medium">
            Buy me a coffee
          </span>
          <span className="block w-12 h-[1px] bg-amber-500/40" />
        </div>
        <p className="text-lg opacity-75 mb-3 font-light tracking-wide leading-relaxed">
          If you find my work helpful and want to support me,
          <br />
          you can buy me a coffee! ☕️
        </p>
        <p className="text-sm opacity-45 font-light tracking-wide">
          Your support helps me keep creating and building awesome things.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto pb-20 px-4">
        {/* MoMo Card */}
        <div
          className="group relative rounded-[2.5rem] overflow-hidden border backdrop-blur-xl p-10 shadow-2xl transition-all duration-700 hover:-translate-y-3"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            borderColor: "rgba(165,0,100,0.2)",
          }}
        >
          {/* Warm glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#a50064]/10 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -top-32 -right-32 w-56 h-56 bg-[#a50064] rounded-full blur-[100px] opacity-0 group-hover:opacity-25 transition-opacity duration-1000" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-1000" />

          <SteamParticles />

          <div className="relative z-10 flex flex-col items-center">
            {/* MoMo badge */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#a50064] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[#c50078] to-[#a50064] flex items-center justify-center shadow-2xl shadow-[#a50064]/30 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-white font-bold text-xl tracking-tighter">M</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
              MoMo Wallet
            </h3>
            <p className="text-xs opacity-40 tracking-[0.2em] uppercase mb-8">Scan to donate</p>

            {/* QR Container */}
            <div className="relative w-full max-w-[240px] aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-[#a50064]/40 transition-all duration-700 p-2.5 bg-white/[0.03]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#a50064]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={momoQr}
                  alt="MoMo QR Code"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* TCB Card */}
        <div
          className="group relative rounded-[2.5rem] overflow-hidden border backdrop-blur-xl p-10 shadow-2xl transition-all duration-700 hover:-translate-y-3"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            borderColor: "rgba(230,0,0,0.15)",
          }}
        >
          {/* Warm glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/8 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -bottom-32 -left-32 w-56 h-56 bg-[#e60000] rounded-full blur-[100px] opacity-0 group-hover:opacity-2 transition-opacity duration-1000" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500 rounded-full blur-[80px] opacity-0 group-hover:opacity-12 transition-opacity duration-1000" />

          <SteamParticles />

          <div className="relative z-10 flex flex-col items-center">
            {/* TCB badge */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#e60000] rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-[#e60000]/10 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-[#e60000] font-black text-lg tracking-tighter">TCB</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
              Techcombank
            </h3>
            <p className="text-xs opacity-40 tracking-[0.2em] uppercase mb-8">Scan to donate</p>

            {/* QR Container */}
            <div className="relative w-full max-w-[240px] aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-[#e60000]/40 transition-all duration-700 p-2.5 bg-white/[0.03]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#e60000]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={tcbQr}
                  alt="Techcombank QR Code"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframe styles for steam animation */}
      <style jsx>{`
        @keyframes steam-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-180px) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
