/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Flex,
  Box,
  Button,
  Image,
  Menu,
  Link as LinkChakra,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { mainExpected } from "@/components/common/getAddresses";
import { onUpdateUser } from "@/redux/actions";
import { useWeb3React } from "@web3-react/core";
import { WALLETS } from "@/utils/connection/utils";
import useMagicLink from "@/hooks/useMagicLink";
import { LogoutOutlined } from "@ant-design/icons";
import { onGetAssets } from "@/redux/nft_actions";
import { useRouter } from "next/navigation";
import { useModalUltraman } from "./ModalUltraman";

function Header({ redirect }: any) {
  const { ethAddress: account } = useSelector(
    (state: any) => state.blockchain.user,
  );

  const { account: user, provider } = useWeb3React();

  const [relogin, setRelogin] = React.useState(false);

  const router = useRouter();

  const { login } = useMagicLink(mainExpected() ? 137 : 80001);

  const dispatch = useDispatch();

  const { ModalUltraman, show } = useModalUltraman();

  React.useEffect(() => {
    if (user) dispatch(onGetAssets(user));
  }, [user]);

  React.useEffect(() => {
    if (relogin) {
      dispatch(
        onUpdateUser({
          ethAddress: user,
          email: "",
          provider: provider?.provider,
          providerName: "web3react",
        } as any),
      );
    }
  }, [user, relogin]);

  React.useEffect(() => {
    const typeOfConnection = localStorage.getItem("typeOfConnection");
    const savedLoginTime = localStorage.getItem("loginTime");
    const currentTime = new Date().getTime();
    const TWELVE_HOURS = 12 * 60 * 60 * 1000;
    console.log("relogin", typeOfConnection, savedLoginTime);
    if (
      typeOfConnection &&
      savedLoginTime &&
      currentTime - parseInt(savedLoginTime) <= TWELVE_HOURS
    ) {
      WALLETS.forEach(async (wallet) => {
        console.log(wallet);
        if (wallet.title == typeOfConnection) {
          console.log("login");
          await wallet.connection.connector.activate();
          setRelogin(true);
        }
      });
      if (typeOfConnection == "magic") {
        login(dispatch);
      }
    } else {
      localStorage.removeItem("typeOfConnection");
      localStorage.removeItem("loginTime");
    }
  }, []);

  return (
    <Flex
      bg="black"
      justifyContent="space-between"
      alignItems="center"
      py="1"
      px={["4", "8"]}
    >
      {ModalUltraman}
      <Box display="flex" alignItems="center">
        <Link href="/">
          <Image
            src={"./assets/logo.png"}
            alt="Endersgate Logo"
            h="10"
            mr="4"
          />{" "}
        </Link>
        <Flex display={["none", "none", "flex"]} alignItems="center">
          <Box mx="4" className="text-white font-bold text-lg">
            <a href="https://endersgate.app/" target={"_blank"}>
              Games
            </a>
          </Box>
          <Box mx="4" className="text-white font-bold text-lg">
            <a href="https://marketplace.endersgate.gg/shop" target="_blank">
              Shop
            </a>
          </Box>
          <Box mx="4" className="text-white font-bold text-lg">
            <a
              href="https://marketplace.endersgate.gg/competitive"
              target="_blank"
            >
              Stats
            </a>
          </Box>
          <Box mx="4" className="text-white font-bold text-lg">
            <a
              target="_blank"
              href="https://marketplace.endersgate.gg/pack_opening"
            >
              Packs
            </a>
          </Box>
        </Flex>
      </Box>

      <Flex display={["none", "none", "flex"]} alignItems="center">
        <Box
          mx="4"
          className="text-white font-bold text-lg cursor-pointer"
          onClick={() => {
            show();
          }}
        >
          <img src="/images/um_btn_navbar.webp" className="h-14" alt="um" />
        </Box>
      </Flex>

      <Box display={["flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="white"
            variant="outline"
            color="white"
          >
            Menu
          </MenuButton>
          <MenuList zIndex={10000}>
            <MenuItem className="text-white font-bold text-lg">
              <a href="https://marketplace.endersgate.gg/shop" target="_blank">
                Shop
              </a>
            </MenuItem>
            <MenuItem className="text-white font-bold text-lg">
              <a
                href="https://marketplace.endersgate.gg/competitive"
                target="_blank"
              >
                Stats
              </a>
            </MenuItem>
            <MenuItem className="text-white font-bold text-lg">
              <Link href="/gallery">Gallery</Link>
            </MenuItem>
            <MenuItem className="text-white font-bold text-lg">
              <Link href="/#social">Social</Link>
            </MenuItem>
            <MenuItem
              className="text-white font-bold text-lg cursor-pointer"
              onClick={() => {
                show();
              }}
            >
              Ultraman whitelist!
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Header;
