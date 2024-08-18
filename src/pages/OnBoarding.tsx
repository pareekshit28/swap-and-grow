import React from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/Navbar";
import Home from "./Home";

const OnBoarding = () => {
  const { isConnected } = useAccount();
  return isConnected ? (
    <>
      <Navbar />
      <Home />
    </>
  ) : (
    <div
      className="h-screen w-screen  bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/OIG2.a74oS.ETOpF5URwHoxNu?pid=ImgGn')",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black/30">
        <text className="text-white text-6xl font-bold font-Orbitron mb-3 ">
          Swap and Grow
        </text>
        <text className="text-white text-xl font-semibold font-Orbitron mb-6">
          Decentralized Investment Platform
        </text>
        <text className="text-white text-xl font-mono mb-6">
          ( ✅ Quick and Easy On-Boarding 🏂 )
        </text>
        <text className="text-white text-xl font-mono mb-6">
          ( ✅ AI suggested SWAPS to efficiently grow your money 🚀 )
        </text>
        <text className="text-white text-xl font-mono mb-6">
          ( ✅ Easy On-Ramp 💸🔗 )
        </text>
        <w3m-button />
      </div>
    </div>
  );
};

export default OnBoarding;
