import * as React from "react";

export const NonCompatibleNetworkPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center font-bold text-primary bg-[#000000] text-2xl">
      {
        "This section is not available for the blockchain you've selected, please change your network"
      }
    </div>
  );
};
