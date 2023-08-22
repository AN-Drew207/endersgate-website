import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import testAddress from "@/addresses/addresses_test.json";
import mainAddress from "@/addresses/addresses.json";
import { mainExpected } from "@/components/common/getAddresses";
import { ConnectionType } from "@/utils/connection";

const addresses: any = mainExpected() ? mainAddress : testAddress;
const networksAllowed = [1666600000, 1666700000, 137, 80001];
const networksAllowedNames: ("harmony" | "matic")[] = [
  "harmony",
  "harmony",
  "matic",
  "matic",
];

type payloadAction = {
  network: number;
  networkName: "harmony" | "matic" | "ethereum";
};

export interface CounterState {
  network: number;
  networkEth: number;
  networkName: string;
  networkNameEth: string;
  addresses: any;
  addressesEth: any;
  networksAllowed: number[];
  networksAllowedNames: string[];
  user: {
    ethAddress: string;
    email: string;
    wallet: any;
    networkId: any;
    provider: any;
    providerEth: any;
    providerName: string;
    ownsBattlePass: boolean;
  };
  cart: any[];
  cartPass: any[];
  cartComics: any[];
}

const initialState: CounterState = {
  network: mainExpected() ? 137 : 80001,
  networkName: "matic",
  networkNameEth: "ethereum",
  networkEth: mainExpected() ? 1 : 11155111,
  addresses: addresses["matic"],
  addressesEth: addresses["ethereum"],
  networksAllowed: networksAllowed,
  networksAllowedNames: networksAllowedNames,
  user: {
    ethAddress: "",
    email: "",
    wallet: ConnectionType.INJECTED,
    networkId: null,
    provider: undefined,
    providerEth: mainExpected()
      ? "https://eth-mainnet.g.alchemy.com/v2/KpHUEywR3YFVceKZ4cEjzs6foHHLxrjP"
      : "https://eth-sepolia.g.alchemy.com/v2/BfGR3y7e0oXJHUpip80XOg2qv0v37aU5",
    providerName: "",
    ownsBattlePass: false,
  },
  cart: [],
  cartComics: [],
  cartPass: [
    {
      id: 1,
      seller: "0x2A441a7B86eF3466C4B78cB5A8c08c836794E2Ab",
      nft: "0x516F333056A89104d0029F13D84A5e28f3ea6C76",
      nftId: "1",
      amount: "10000000",
      priceUSD: "50000000",
      tokens: [
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39",
      ],
      status: "0",
      name: "EG Battle Pass",
      color: "#E9D880",
      price: "50 USD in MATIC Token",
      quantity: 1,
    },
  ],
};

export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    changeNetwork: (state, action: PayloadAction<payloadAction>) => {
      state.network = action.payload.network;
      state.networkName = action.payload.networkName;
      state.addresses = addresses[action.payload.networkName];
    },
    onUpdateUser: (state, action: any) => {
      state.user.email = action.payload.email;
      state.user.ethAddress = action.payload.ethAddress;
      state.user.provider = action.payload.provider;
      state.user.providerName = action.payload.providerName;
      state.user.ownsBattlePass = action.payload.ownsBattlePass;
    },
    addCart: (state: any, action) => {
      state.cart.push(action.payload);
    },
    editCart: (state: any, action) => {
      state.cart[action.payload.id] = action.payload.item;
    },
    removeFromCart: (state: any, action) => {
      state.cart = state.cart.filter(
        (item: any) => item.id !== action.payload.id,
      );
    },
    removeAll: (state: any) => {
      state.cart = [];
    },
    addPassCart: (state: any, action) => {
      state.cartPass.push(action.payload);
    },
    editPassCart: (state: any, action) => {
      state.cartPass[action.payload.id] = action.payload.item;
    },
    removePassFromCart: (state: any, action) => {
      state.cartPass = state.cart.filter(
        (item: any) => item.id !== action.payload.id,
      );
    },
    removePassAll: (state: any) => {
      state.cartPass = [];
    },
    addComicsCart: (state: any, action) => {
      state.cartComics.push(action.payload);
    },
    editComicsCart: (state: any, action) => {
      state.cartComics[action.payload.id] = action.payload.item;
    },
    removeComicsFromCart: (state: any, action) => {
      state.cartComics = state.cart.filter(
        (item: any) => item.id !== action.payload.id,
      );
    },
    removeComicsAll: (state: any) => {
      state.cartComics = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeNetwork,
  onUpdateUser,
  addCart,
  editCart,
  removeAll,
  removeFromCart,
  addPassCart,
  editPassCart,
  removePassAll,
  removePassFromCart,
  addComicsCart,
  editComicsCart,
  removeComicsAll,
  removeComicsFromCart,
} = blockchainSlice.actions;

export default blockchainSlice.reducer;
