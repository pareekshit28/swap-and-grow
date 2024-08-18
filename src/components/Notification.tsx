import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

const Notification = () => {
  const { open } = useWeb3Modal();
  return (
    <div className="mt-4 bg-white/20 p-4 rounded-xl">
      <text className="font-semibold">Suggested Swap ✨</text>
      <div className="flex flex-row items-center mt-5">
        <img
          src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=032"
          height={50}
          width={50}
        />
        <div className="flex flex-col ml-4">
          <text className="font-semibold">Shiba Inu</text>
          <text>SHIB</text>
        </div>
        <text className="text-xl font-semibold ml-3 mt-1 text-red-500 flex items-center">
          5.82%
          <ArrowDownward />
        </text>
        <text className=" mx-7">To</text>
        <img
          src="https://cryptologos.cc/logos/amp-amp-logo.png?v=033"
          height={50}
          width={50}
        />
        <div className="flex flex-col ml-4">
          <text className="font-semibold">Amp&nbsp;&nbsp;</text>
          <text>AMP</text>
        </div>
        <text className="text-xl font-semibold ml-3 mt-1 text-green-500 flex items-center">
          11.61%
          <ArrowUpward />
        </text>
      </div>
      <div className="flex justify-around items-center mt-4">
        <button className=" bg-black/70 w-full h-12 rounded-xl">Ignore</button>
        <button
          className=" bg-black/70 w-full h-12 rounded-xl ml-2"
          onClick={() => open({ view: "Account" })}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Notification;
