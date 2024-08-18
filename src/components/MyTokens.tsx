import {
  ArrowDownward,
  ArrowUpward,
  CurrencyExchange,
} from "@mui/icons-material";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

const MyTokens = ({
  image,
  name,
  symbol,
  value,
  valueUsd,
  change,
  up,
}: {
  image: string;
  name: string;
  symbol: string;
  value: string;
  valueUsd: string;
  change: string;
  up: boolean;
}) => {
  const { open } = useWeb3Modal();
  return (
    <div className=" flex items-center">
      <img src={image} height={50} width={50} />
      <div className="flex flex-col ml-4">
        <text className="font-semibold">{name}</text>
        <text>{symbol}</text>
      </div>

      <div className="flex flex-col ml-10">
        <text className="font-semibold">{`${value} ${symbol}`}</text>
        <text>{valueUsd} USD</text>
      </div>
      <text className="mx-auto"></text>
      <text
        className={`text-lg font-semibold mt-1 flex items-center mr-6 ${
          up ? "text-green-500" : " text-red-500"
        }`}
      >
        {change}
        {up ? <ArrowUpward /> : <ArrowDownward />}
      </text>
      <button
        className=" p-4 bg-white/20 rounded-full flex items-center"
        onClick={() => {
          open({ view: "Account" });
        }}
      >
        <CurrencyExchange style={{ margin: "0 4 0 0" }} />
        SWAP
      </button>
    </div>
  );
};

export default MyTokens;
