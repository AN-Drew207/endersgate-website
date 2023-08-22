export const switchChain = async (network) => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: "0x" + parseInt(network).toString(16),
      },
    ],
  });
};
