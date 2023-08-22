import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeNetwork } from "@/redux/actions";
import { switchChain } from "./web3Functions";

export const NetworkListener = () => {
  const state = useSelector((state) => state.blockchain);
  const { network } = useSelector((state) => state.blockchain);
  const [isExecuted, setIsExecuted] = React.useState(false);
  const [isExecutedChange, setIsExecutedChange] = React.useState(false);
  const [onChange, setOnChange] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const networkSetted = location?.state?.network;

  const navigate = useNavigate();

  const display = (network) => {
    navigate(location.pathname + "?network=" + network, {
      state: {
        network: network,
      },
    });
  };

  const onChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    setOnChange(true);
    // window.location.reload();
  };

  React.useEffect(() => {
    if (onChange) {
      display(network);
      window.location.reload();
    }
  }, [onChange]);

  React.useEffect(() => {
    const networksAllowed = state.networksAllowed;
    if (networksAllowed.includes(networkSetted)) {
      console.log("si");
      dispatch(
        changeNetwork({
          network: networkSetted,
          networkName:
            state.networksAllowedNames[networksAllowed.indexOf(networkSetted)],
        }),
      );
    }
    setIsExecutedChange(true);
  }, [networkSetted]);

  React.useEffect(() => {
    if (location && isExecutedChange) {
      switchChain(network);
    }
  }, [network, networkSetted]);
  if (
    typeof window !== "undefined" &&
    window?.ethereum?.isConnected() &&
    !isExecuted
  ) {
    window.ethereum.on("accountsChanged", onChangedHandler);
    window.ethereum.on("chainChanged", onChangedHandler);
    setIsExecuted(true);
  }
  return <div></div>;
};
