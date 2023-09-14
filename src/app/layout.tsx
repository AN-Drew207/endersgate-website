"use client";
import "@/styles/globals.css";
import "@/styles/global-tailwind.css";
import React from "react";
import "@/styles/index.css";
import "@/styles/App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Web3Provider from "@/components/Web3Provider";
import Header from "@/components/newComponents/home/header";
import { ToastProvider } from "react-toast-notifications";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = extendTheme({
    colors: {
      primary: "#D2A2FF",
      secondary: "rgba(50,50,50,255)",
      menu: "#292832",
      elemental: "rgba(8,8,19,255)",
      water: "#93dbff",
      nftbg: "#A48C66",
      roadmap: "#080813",
      footer: "#171717",
      gold: "#bc8b30",
      yellow: "#FFAB10",
      fire: "#ffbb88",
      earth: "#9f8a7e",
      venom: "#8cffaf",
      mystic: "#b9c6c7",
      void: "#c87cfc",
    },
    fonts: {
      poppins: "Poppins",
    },
  });

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="description"
          content="Enders Gate is a Free to Play Web3 trading card game inspired by titles such as Yu-Gi-Oh, Magic The Gathering, and Hearthstone, Enders Gate players can collect, trade, and battle using their own prebuilt digital card decks unique to their play style."
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>Enders Gate - Web3 Trading Card Game</title>
        <meta name="title" content="Enders Gate - Web3 Trading Card Game" />
        <meta
          name="description"
          content="Enders Gate is a Free to Play Web3 trading card game inspired by titles such as Yu-Gi-Oh, Magic The Gathering, and Hearthstone, Enders Gate players can collect, trade, and battle using their own prebuilt digital card decks unique to their play style."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://endersgate.gg/" />
        <meta
          property="og:title"
          content="Enders Gate - Web3 Trading Card Game"
        />
        <meta
          property="og:description"
          content="Enders Gate is a Free to Play Web3 trading card game inspired by titles such as Yu-Gi-Oh, Magic The Gathering, and Hearthstone, Enders Gate players can collect, trade, and battle using their own prebuilt digital card decks unique to their play style."
        />
        <meta
          property="og:image"
          content="https://endersgate.net/endersgate.gif"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://endersgate.net/" />
        <meta
          property="twitter:title"
          content="Enders Gate - Web3 Trading Card Game"
        />
        <meta
          property="twitter:description"
          content="Enders Gate is a Free to Play Web3 trading card game inspired by titles such as Yu-Gi-Oh, Magic The Gathering, and Hearthstone, Enders Gate players can collect, trade, and battle using their own prebuilt digital card decks unique to their play style."
        />
        <meta
          property="twitter:image"
          content="https://endersgate.net/endersgate.gif"
        />
      </head>
      <body className={"flex flex-col w-full"}>
        <Provider store={store}>
          <ToastProvider>
            <Web3Provider>
              <ChakraProvider theme={theme}>
                <Header /> {children}
              </ChakraProvider>
            </Web3Provider>
          </ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
