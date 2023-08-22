import contracts from "@/contracts";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

export const getWeb3 = (provider?: any) => {
  return new Web3(provider ? provider : window.ethereum);
};

export const getContractCustom = (
  factory:
    | "Aggregator"
    | "ERC20"
    | "EndersGate"
    | "EndersPack"
    | "ClockSale"
    | "BattlePass"
    | "Comics",
  address: string,
  provider: any,
) => {
  const web3 = getWeb3(provider);
  const contract: any = contracts[factory];
  return new web3.eth.Contract(contract, address);
};
