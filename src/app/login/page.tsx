/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "@/components/common/button";
import clsx from "clsx";
import useMagicLink from "@/hooks/useMagicLink";
import { WALLETS } from "@/utils/connection/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { onUpdateUser } from "@/redux/actions";
import { useWeb3React } from "@web3-react/core";
import { mainExpected } from "@/components/common/getAddresses";
import { useDispatch, useSelector } from "react-redux";
import { switchChain } from "@/components/common/switchChain";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const { login, isAuthenticated, magic } = useMagicLink(
    mainExpected() ? 137 : 80001,
  );

  const { ethAddress: account } = useSelector(
    (state: any) => state.blockchain.user,
  );

  const { network, networkName } = useSelector(
    (state: any) => state.blockchain,
  );

  const { account: user, provider } = useWeb3React();

  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(dispatch);
      localStorage.setItem("typeOfConnection", "magic");
      localStorage.setItem("loginTime", new Date().getTime().toString());
      const queryAddress: any = searchParams.get("redirectAddress")?.toString();
      if (
        searchParams.get("redirect") == "true" &&
        searchParams.get("redirectAddress") != null
      ) {
        router.push(
          searchParams.get("redirectAddress") != undefined ? queryAddress : "/",
        );
      }
    } catch (err) {
      console.log({ err });
      setLoading(false);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (isAuthenticated || account !== "") router.push("/");
  }, [isAuthenticated, account]);

  const handleConnection = async (connection: any, title: any) => {
    setLoading(true);
    try {
      await connection.connector.activate();
      console.log(connection);
      localStorage.setItem("typeOfConnection", title);
      localStorage.setItem("loginTime", new Date().getTime().toString());
      const queryAddress: any = searchParams.get("redirectAddress")?.toString();
      await switchChain(network, networkName, provider);

      dispatch(
        onUpdateUser({
          ethAddress: user,
          email: "",
          provider: provider?.provider,
          providerName: "web3react",
        } as any),
      );
      if (
        searchParams.get("redirect") == "true" &&
        searchParams.get("redirectAddress") != null
      ) {
        router.push(
          searchParams.get("redirectAddress") != undefined ? queryAddress : "/",
        );
      }
    } catch (err) {
      console.log({ err });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[100vw] h-screen overflow-hidden">
      <div className="max-w-[100vw] overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-10">
        <div className="absolute h-screen max-w-full overflow-hidden">
          <img
            src={"./assets/gallerybg.svg"}
            className={`relative min-w-[120vw] min-h-[101vh] top-0 right-0 left-[-8%] mx-auto`}
            alt=""
          />
        </div>
        <h1 className="font-bold text-white text-3xl relative">
          WELCOME TO ENDERS GATE
        </h1>
        <div
          className={clsx(
            "flex flex-col gap-4 relative h-80 items-center justify-center",
          )}
        >
          {loading == true ? (
            <LoadingOutlined className="text-5xl text-white" />
          ) : (
            <>
              <Button
                disabled={loading}
                decoration="line-white"
                size="medium"
                className="w-full mb-2 bg-black rounded-md  text-white hover:text-black"
                onClick={() => handleLogin()}
              >
                {loading ? "..." : "Login with Email"}
              </Button>
              {WALLETS.map((k: any, i: any) => (
                <Button
                  key={`login-${k.title}`}
                  disabled={loading}
                  decoration="line-white"
                  size="medium"
                  className="w-full mb-2 bg-black rounded-md  text-white hover:text-black"
                  onClick={() => handleConnection(k.connection, k.title)}
                >
                  {loading ? "..." : "Login with " + k.title}
                </Button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
