import React from "react";
import Transaction from "../components/Transaction";
import Notification from "../components/Notification";
import HorizontalDivider from "../components/HorizontalDivider";
import { AddCircleOutline, ArrowUpward } from "@mui/icons-material";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import MyTokens from "../components/MyTokens";
import TopMover from "../components/TopMover";

const Home = () => {
  const { open } = useWeb3Modal();

  return (
    <div className="flex flex-col w-screen h-screen px-10 text-white">
      <div className="flex">
        <div className="flex flex-col w-1/3 p-6 mr-6 rounded-2xl bg-gray-800">
          <div className="flex justify-between w-full items-center">
            <div>
              <text className="text-3xl mb-2 font-semibold">
                Current Portfolio Value
              </text>
              <div className="flex items-end mb-1">
                <text className="text-2xl font-semibold mt-1 mr-2">
                  $1647.6
                </text>
                <text className="text-xl font-semibold mt-1 text-green-500 flex items-center">
                  17.20%
                  <ArrowUpward />
                </text>
              </div>
              <text className="mt-4">Total Invested: $1500</text>
            </div>
            <button onClick={() => open({ view: "OnRampProviders" })}>
              <AddCircleOutline style={{ fontSize: "70px" }} />
            </button>
          </div>
          <HorizontalDivider margin="my-6" />
          <MyTokens
            image="https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=033"
            name="Shiba Inu"
            symbol="SHIB"
            value="22400000"
            valueUsd="224.02"
            change="5.82%"
            up={false}
          />
          <HorizontalDivider margin="my-6" />
          <MyTokens
            image="https://cryptologos.cc/logos/uniswap-uni-logo.png?v=033"
            name="Uniswap"
            symbol="UNI"
            value="118.15"
            valueUsd="768.4"
            change="5.23%"
            up={true}
          />
          <HorizontalDivider margin="my-6" />
          <MyTokens
            image="https://cryptologos.cc/logos/aave-aave-logo.png?v=033"
            name="Aave &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            symbol="AAVE"
            value="5.76"
            valueUsd="655.2"
            change="17.6%"
            up={true}
          />
        </div>
        <div className="flex flex-col w-1/3 p-6 mr-6 rounded-2xl bg-gray-800">
          <div className="flex">
            <text className="text-3xl mb-2 font-semibold mr-2">
              Notifications
            </text>
            <div className="flex items-center justify-center h-10 w-10 bg-red-500 text-white text-xl font-bold rounded-full">
              1
            </div>
          </div>
          <Notification />
        </div>
        <div className="flex flex-col w-1/3 p-6 rounded-2xl bg-gray-800">
          <text className="text-3xl mb-2 font-semibold">Top Movers</text>
          <TopMover
            image="https://public.bnbstatic.com/image/pgc/202401/c22fbd033eba360471947f33a125837c.png"
            name="Altlayer"
            symbol="ALT"
            valueUsd="0.10"
            change="16.6%"
          />
          <HorizontalDivider margin="mt-6" />
          <TopMover
            image="https://cryptologos.cc/logos/amp-amp-logo.png?v=033"
            name="Amp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            symbol="AMP"
            valueUsd="0.003"
            change="11.6%"
          />
          <HorizontalDivider margin="mt-6" />
          <TopMover
            image="https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2024/07/Gravity-logo.jpg&w=150&h=150&q=75"
            name="Gravity&nbsp;"
            symbol="G"
            valueUsd="0.04"
            change="10.1%"
          />
          <HorizontalDivider margin="mt-6" />
          <TopMover
            image="https://framerusercontent.com/images/TQVlEVZdRJVClAFP0oNPpQrJ5eo.svg"
            name="Galxe&nbsp;&nbsp;&nbsp;&nbsp;"
            symbol="GAL"
            valueUsd="2.45"
            change="9.41%"
          />
        </div>
      </div>
      <div className="flex flex-col p-6 mt-8 bg-gray-800 rounded-2xl">
        <text className="text-3xl mb-2 font-semibold">Transactions</text>
        <Transaction
          image="https://s2.coinmarketcap.com/static/img/coins/200x200/28301.png"
          name="MemeCoin"
          symbol="MEME"
          value="77218"
          valueUsd="774.93"
          image2="https://cryptologos.cc/logos/uniswap-uni-logo.png?v=033"
          name2="Uniswap"
          symbol2="UNI"
          value2="118.15"
          valueUsd2="768.4"
          txn="0xb71fdc0e321a45c02c68433758c5f9c24bc6be69eea8ce58fe2d262e07032df6"
        />
        <HorizontalDivider margin="m-2" />
        <Transaction
          image="https://s3.coinmarketcap.com/static-gravity/image/b501162ffd4d4def9ee90f3ee630bde7.png"
          name="Blast&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          symbol="BLAST"
          value="63220"
          valueUsd="660.7"
          image2="https://cryptologos.cc/logos/aave-aave-logo.png?v=033"
          name2="Aave&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          symbol2="AAVE"
          value2="5.76"
          valueUsd2="655.2"
          txn="0xc987fdc0e321a45c02c68433758c5f9c24bc6be69eea8ce58fe2d262e07032jh5"
        />
      </div>
    </div>
  );
};

export default Home;
