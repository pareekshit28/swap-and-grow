import { ArrowOutward, ContentCopy } from "@mui/icons-material";

const Transaction = ({
  image,
  name,
  symbol,
  value,
  valueUsd,
  image2,
  name2,
  symbol2,
  value2,
  valueUsd2,
  txn,
}: {
  image: string;
  name: string;
  symbol: string;
  value: string;
  valueUsd: string;
  image2: string;
  name2: string;
  symbol2: string;
  value2: string;
  valueUsd2: string;
  txn: string;
}) => {
  return (
    <div className=" flex items-center p-4 w-full">
      <img src={image} height={50} width={50} />
      <div className="flex flex-col ml-4">
        <text className="font-semibold">{name}</text>
        <text>{symbol}</text>
      </div>
      <div className="flex flex-col ml-4">
        <text className="font-semibold">
          {value}&nbsp;{symbol}
        </text>
        <text>{valueUsd} USD</text>
      </div>
      <text className=" mx-10">To</text>
      <img src={image2} height={50} width={50} />
      <div className="flex flex-col ml-4">
        <text className="font-semibold">{name2}</text>
        <text>{symbol2}</text>
      </div>
      <div className="flex flex-col ml-4">
        <text className="font-semibold">
          {value2}&nbsp;{symbol2}
        </text>
        <text>{valueUsd2} USD</text>
      </div>
      <text className=" mx-auto"></text>
      <div className="flex flex-col ml-4">
        <text className="font-semibold">Transaction Hash</text>
        <text className=" bg-white/20 rounded-full px-3 py-2 mt-2">
          {txn}
          <ContentCopy style={{ margin: "0 0 0 4" }} />
        </text>
      </div>
      <text className=" mx-auto"></text>
      <button className=" p-4 bg-white/20 rounded-full">
        View on EtherScan
        <ArrowOutward />
      </button>
    </div>
  );
};

export default Transaction;
