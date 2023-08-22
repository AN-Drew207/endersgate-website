import clsx from "clsx";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainExpected } from "../getAddresses";
import { changeNetwork } from "../@/redux/actions";

export const ChangeNetworkButton = () => {
  const { network } = useSelector((state) => state.blockchain);
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(network);
  }, [network]);
  const arrayNetworks = mainExpected()
    ? [
        {
          networkId: 1666600000,
          networkName: "harmony",
          networkAbreviation: "HARM",
          classActive: "text-white bg-blue-500",
          classInactive: "text-white bg-transparent",
        },
        {
          networkId: 137,
          networkName: "matic",
          networkAbreviation: "MATIC",
          classActive: "text-white bg-purple-700",
          classInactive: "text-white bg-transparent",
        },
      ]
    : [
        {
          networkId: 1666700000,
          networkName: "harmony",
          networkAbreviation: "HARM",
          classActive: "text-white bg-blue-500",
          classInactive: "text-white bg-transparent",
        },
        {
          networkId: 80001,
          networkName: "matic",
          networkAbreviation: "MATIC",
          classActive: "text-white bg-purple-700",
          classInactive: "text-white bg-transparent",
        },
      ];
  return (
    <div className="flex items-center text-white cursor-pointer">
      {arrayNetworks.map(
        (
          {
            networkId,
            networkName,
            networkAbreviation,
            classActive,
            classInactive,
          },
          i,
        ) => {
          return (
            <div
              key={networkId}
              className={clsx(
                "w-16 flex justify-center py-1",
                { ["rounded-l-md"]: i == 0 },
                { ["rounded-r-md"]: i == arrayNetworks.length - 1 },
                { [classActive]: network == networkId },
                { [classInactive]: network != networkId },
              )}
              onClick={async () => {
                console.log("network", networkId);
                try {
                  await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                      {
                        chainId: "0x" + parseInt(networkId).toString(16),
                      },
                    ],
                  });
                  dispatch(
                    changeNetwork({
                      network: networkId,
                      networkName: networkName,
                    }),
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {networkAbreviation}
            </div>
          );
        },
      )}
    </div>
  );
};
