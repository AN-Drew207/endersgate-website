/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Flex, Box, Text, Image, Link } from "@chakra-ui/react";
import Footer from "@/components/newComponents/home/footer";
import Navbar from "@/components/newComponents/floatingMenu/floatingMenu";
import Table from "@/components/newComponents/table/table";
import HomeTop from "@/components/newComponents/carosel/HomeTop";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative py-20 h-[95vh] bg-[#000] w-full text-4xl text-white">
        404 | Page not found :(
      </div>
    </>
  );
}

export default LandingPage;
