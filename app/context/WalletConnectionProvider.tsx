"use client";

import React, { FC, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
//import {
//    WalletModalProvider,
//    WalletDisconnectButton,
//    WalletMultiButton
//} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

const WalletModalProvider = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletModalProvider,
    { ssr: false }
);



interface WalletConnectionProviderProps {
  children: React.ReactNode;
}

const WalletConnectionProvider: FC<WalletConnectionProviderProps> = ({
  children
}) => {
  return (
    <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_DEVNET_URL as string}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  {children }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  );
};

export default WalletConnectionProvider 
