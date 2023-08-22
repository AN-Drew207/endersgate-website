import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import { onUpdateUser } from "@/redux/actions";
import { networkConfigs } from "@/components/helpers/networks";

const getMagicConfig = (networkId: number) => {
  const network = networkConfigs[networkId];
  return {
    rpcUrl: network["rpc"],
    chainId: networkId,
  };
};

export default function useMagicLink(networkId: number = 137) {
  const [account, setAccount] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);
  const [web3, setWeb3] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [magic, setMagic] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);

  const [user, setUser] = React.useState<any>(null);

  if (
    typeof window !== "undefined" &&
    magic == null &&
    "pk_live_92FCE3D8E93CA379"
  ) {
    // Client-side-only code
    const key = "pk_live_92FCE3D8E93CA379" ? "pk_live_92FCE3D8E93CA379" : "";

    console.log(getMagicConfig(137), "lamama");

    const magic: any = new Magic(key, {
      network: getMagicConfig(networkId),
      locale: "en_US",
      extensions: [new ConnectExtension()],
    });

    console.log("magic", magic, key);
    console.log(magic);
    setMagic(magic);
    setProvider(magic.rpcProvider);
    setWeb3(new Web3(magic.rpcProvider));
  }

  const showWallet = async () => {
    // const walletInfo = await magic.wallet.getInfo();
    // const walletType = walletInfo.walletType;

    // if (walletType === "magic") {
    //   await magic.wallet.showUI();
    // }

    const key = "pk_live_92FCE3D8E93CA379" ? "pk_live_92FCE3D8E93CA379" : "";

    const magic: any = new Magic(key, {
      network: getMagicConfig(networkId),
      locale: "en_US",
      extensions: [new ConnectExtension()],
    });

    console.log(
      magic.connect,
      magic,
      "a, but connect has not been executeeeed",
    );

    magic.connect.showWallet().catch((e: any) => {
      console.log(e);
    });
  };

  // React.useEffect(() => {
  //   if (
  //     typeof window !== "undefined" &&
  //     magic == null &&
  //     "pk_live_92FCE3D8E93CA379"
  //   ) {
  //     const key = "pk_live_92FCE3D8E93CA379"
  //       ? "pk_live_92FCE3D8E93CA379"
  //       : "";

  //     console.log(getMagicConfig(networkId), "lamama");

  //     const magic: any = new Magic(key, {
  //       network: getMagicConfig(networkId),
  //       locale: "en_US",
  //       extensions: [new ConnectExtension()],
  //     });
  //     console.log(magic);
  //     setMagic(magic);
  //     setProvider(magic.rpcProvider);
  //     setWeb3(new Web3(magic.rpcProvider));
  //   }
  // }, [networkId]);

  const login = async (dispatch: any) => {
    console.log("login", magic);
    setLoading(true);
    try {
      // const publicAddress = (await magic.wallet.connectWithUI())[0];
      const publicAddress = (await web3.eth.getAccounts())[0];
      setAccount(publicAddress);
      setIsAuthenticated(true);
      // const email = await magic.connect.requestUserInfo();
      // setEmail(email);
      const data: any = {
        ethAddress: publicAddress,
        email: email,
        provider: provider,
        providerName: "magic",
      };
      dispatch(onUpdateUser(data));
    } catch (error) {
      console.log(error, "aqui");
    }
    setLoading(false);
  };

  const logout = async (dispatch: any) => {
    setLoading(true);
    await magic.connect.disconnect().catch((e: any) => {
      console.log(e);
    });
    setIsAuthenticated(false);
    setAccount(null);
    const data: any = {
      ethAddress: "",
      providerName: "",
      email: "",
      provider: undefined,
    };
    dispatch(onUpdateUser(data));
    setLoading(false);
  };

  React.useEffect(() => {
    if (account != null) {
      setUser({
        get: (attr: string) => {
          return user[attr];
        },
        ethAddress: account,
        email: email,
        name: "",
        logged: true,
      });
    } else {
      setUser(null);
    }
    console.log(email, account, isAuthenticated);
  }, [email, account, isAuthenticated]);

  return {
    loading,
    login,
    // sendTransaction,
    account,
    magic,
    appKey: "pk_live_92FCE3D8E93CA379",
    isInitialized: magic !== null,
    logout,
    isAuthenticated,
    // isUnauthenticated: account == null,
    // setUserData,
    user,
    // _setUser: (user: MoralisType.User) => void;
    // userError: null | Error;
    // isUserUpdating: boolean;
    // refetchUserData: () => Promise<MoralisType.User | undefined>;
    // enableWeb3: (options?: Web3EnableOptions) => Promise<MoralisType.Web3Provider | undefined>;
    // deactivateWeb3: () => Promise<void>;
    showWallet,
    web3,
    isWeb3Enabled: web3 !== undefined,
    // web3EnableError: Error | null;
    // isWeb3EnableLoading: boolean;
    // chainId;
    // account;
    // network;
    // connector;
    // connectorType;
    provider: provider,
  };
}
