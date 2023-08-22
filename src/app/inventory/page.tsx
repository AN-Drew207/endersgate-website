"use client";
import ProfileIndexPage from "@/components/Profile/index";
import Inventory from "@/components/Profile/inventory/inventory";

const InventoryPage = () => {
  return (
    <ProfileIndexPage>
      <Inventory />
    </ProfileIndexPage>
  );
};

export default InventoryPage;
