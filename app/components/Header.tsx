"use client";

import { Button } from "@/components/ui/button";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";


const Header = () => {
  return (
    <div>
      <header className="p-4 border-b border-border">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">iSwap</h1>
          <Button asChild variant="outline" className="text-black">
            <Link href="/swap">Launch App</Link>
          </Button>

    
            <WalletMultiButton />
            <WalletDisconnectButton />


        </nav>
      </header>
    </div>
  )
}

export default Header