"use client";

import { Button } from "@/components/ui/button";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";


const Header = () => {
  return (
    <div>
     <header className="p-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">ISwap</Link>
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="bg-black text-white">
            <Link href="/swap">Launch App</Link>
          </Button>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header