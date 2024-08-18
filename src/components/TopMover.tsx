import { AddCircleOutline, ArrowUpward } from "@mui/icons-material";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

const TopMover = ({
  image,
  name,
  symbol,
  valueUsd,
  change,
}: {
  image: string;
  name: string;
  symbol: string;
  valueUsd: string;
  change: string;
}) => {
  const { open } = useWeb3Modal();
  return (
    <div className=" flex items-center mt-4">
      <img src={image} height={50} width={50} />
      <div className="flex flex-col ml-4">
        <text className="font-semibold">{name}</text>
        <text>{symbol}</text>
      </div>
      <text className="mx-auto"></text>
      <text>{valueUsd} USD</text>
      <text className="mx-auto"></text>
      <text className="text-lg font-semibold mt-1 text-green-500 flex items-center">
        {change}
        <ArrowUpward />
      </text>
      <text className="mx-auto"></text>
      <button
        className=" p-4 bg-white/20 rounded-full flex items-center"
        onClick={() => {
          open({ view: "OnRampProviders" });
        }}
      >
        <AddCircleOutline style={{ margin: "0 4 0 0" }} />
        BUY
      </button>
    </div>
  );
};

export default TopMover;
