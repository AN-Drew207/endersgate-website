/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./footer.css";
import Partners from "./partners";

function Footer() {
  return (
    <>
      <Partners />
      <div className="w-full h-[264px] bg-black   flex flex-col justify-center items-center">
        <div className="h-[156px] w-full md:w-1283px flex flex-col justify-center items-center">
          <p className="font-inter font-bold  text-white mb-6 mt-5 project-text">
            Join the Community:
          </p>
          <div className="flex justify-center items-center space-x-3 md:space-x-5 flex-wrap">
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://discord.com/invite/endersgate"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/discord.png"}
                  alt="Discord"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://twitter.com/endersgate"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/twitter.png"}
                  alt="Twitter"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://www.youtube.com/channel/UCicr9XOX1EWwpzX3VPbm6kg"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/youtube.png"}
                  alt="Youtube"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://t.me/EndersGate"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/telegram.png"}
                  alt="Telegram"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://www.instagram.com/endersgate/"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/instagram.png"}
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://www.facebook.com/EndersGateTCG"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/facebook.png"}
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://www.reddit.com/r/EndersGate/"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/reddit.png"}
                  alt="Reddit"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://endersgate.gitbook.io/endersgate/welcome/master"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/gitbook.png"}
                  alt="Gitbook"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://5headgames.medium.com/"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/medium.png"}
                  alt="Medium"
                />
              </a>
            </div>
            <div className="mr-3 mb-4 md:mb-5 relative">
              <a
                href="https://www.tiktok.com/@endersgate"
                target="_blank"
                className="circular-image"
              >
                <img
                  src={"./assets/logos/socialMediaIcons/tiktok.png"}
                  alt="Tiktok"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black text-gray-300 py-8 items-center">
        {/* Language Changer */}
        <div className="mb-4">
          <div className="mb-4 w-32">
            <img
              src={"./assets/logos/language.png"}
              alt="Language logo"
              height="50"
            />
          </div>
        </div>
        {/* Logo */}
        <div className="mb-4 w-16">
          <img
            src={"./assets/logos/5headGameslogo.png"}
            alt="Logo"
            height="50"
          />
        </div>

        {/* Links */}
        <div className="flex text-gray-500 mb-4">
          <a
            href="mailto:support@5headgames.com"
            className="mr-2 hover:text-white"
          >
            Contact Us
          </a>
          <a
            target="_blank"
            href="https://endersgate.gitbook.io/endersgate/welcome/master"
            className="mr-2 hover:text-white"
          >
            Whitepaper
          </a>
          <Link href="/legal" className="hover:text-white">
            Legal
          </Link>
        </div>

        {/* Texts */}
        <div className="mb-8 text-gray-500 text-center">
          <p className="font-bold text-lg mb-2">
            Entertainment for Digital Collectors.
            <br />
            5headgames.com
          </p>
          <p className="text-sm text-gray-500">
            ©2023 5HEADGAMES, INC. ALL RIGHTS RESERVED. <br />
            All trademarks referenced herein are the properties of their
            respective owners.
          </p>
        </div>

        {/* Created By */}
        <div>
          <p className="text-sm text-gray-500">WEBSITE BUILT BY 5HEADGAMES</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
