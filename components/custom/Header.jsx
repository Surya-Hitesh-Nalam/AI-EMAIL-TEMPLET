"use client";
import Image from "next/image";
import React from "react";
import SignInButton from "./SignInButton";
import { useUserDetailContext } from "@/app/provider";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  const { userDetail } = useUserDetailContext();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <span className="text-xl font-semibold text-gray-800 tracking-wide">
          AI Email
        </span>
      </Link>

      {/* Right side */}
      <div>
        {userDetail?.email ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                Dashboard
              </Button>
            </Link>
            <Image
              src={userDetail.picture}
              alt="user"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-blue-500"
            />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
};

export default Header;
