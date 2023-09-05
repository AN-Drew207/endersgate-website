import testAddress from "@/addresses/addresses_test.json";
import mainAddress from "@/addresses/addresses.json";
import testTokenAddress from "@/addresses/tokensAllowed.mumbai.json";
import testTokenAddressEth from "@/addresses/tokensAllowed.sepolia.json";
import mainTokenAddress from "@/addresses/tokensAllowed.matic.json";
import mainTokenAddressEth from "@/addresses/tokensAllowed.ethereum.json";

export const getAddresses = () => {
  const mainAddresses: any = mainAddress;
  const testAddresses: any = testAddress;
  return mainExpected() ? mainAddresses : testAddresses;
};

export const getTokensAllowed = () => {
  return mainExpected() ? mainTokenAddress : testTokenAddress;
};

export const getTokensAllowedEth = () => {
  return mainExpected() ? mainTokenAddressEth : testTokenAddressEth;
};

export const mainExpected: () => boolean = () => {
  return true;
};
