import Web3 from "web3";
import { AbiItem } from "web3-utils";
import contracts from "@/contracts";
// import Moralis from "moralis";

export const loginMetamaskWallet = async () => {
  const provider = await window.ethereum;
  if (!provider) return false;
  await window.ethereum.request({ method: "eth_requestAccounts" });
  return new Web3(provider);
};

export const getWeb3 = (provider) => {
  return new Web3(provider ? provider : window.ethereum);
};

export const getContractMetamask = (factory, address) => {
  const web3 = getWeb3();
  return new web3.eth.Contract(contracts[factory], address);
};

export const getContractCustom = (factory, address, provider) => {
  const web3 = getWeb3(provider);
  return new web3.eth.Contract(contracts[factory], address);
};

export const getBalance = async (address) => {
  if (!Web3.utils.isAddress(address)) return "0";
  const web3 = getWeb3(process.env.NEXT_PUBLIC_POLYGON_PROVIDER);
  const balance = await web3.eth.getBalance(address);
  return web3.utils
    .fromWei(balance)
    .substr(0, web3.utils.fromWei(balance).indexOf(".") + 5);
};

export const approveERC1155 = async ({ provider, from, to, address }) => {
  const erc1155Contract = getContractCustom("EndersPack", address, provider);
  console.log(provider, from, to, address);
  console.log(erc1155Contract);
  return await erc1155Contract.methods.setApprovalForAll(to, true).send({
    from: from,
  });
};
