"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";


const Header = () => {
  const wallet = useWallet();
  return (
    <div>
     <header className="p-4 border-b border-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold italic">iSwap</Link>
        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" className="bg-white text-black font-semibold">
            <Link href="/swap">Launch App</Link>
          </Button>
          
          <WalletMultiButton />

          {wallet.connected && (
            <WalletDisconnectButton />
          )}
          
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header