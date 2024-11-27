export interface TokenInfo {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: string;
}

export const solanaTokens: TokenInfo[] = [
  {
    chainId: 101,
    address: "So11111111111111111111111111111111111111112", // SOL
    name: "Solana",
    symbol: "SOL",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
  },
  {
    chainId: 101,
    address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },
  {
    chainId: 101,
    address: "Es9vMFrzaCER9VnPqg4Vtm6Wy6GWvrA9hJ6kQ7h3UjCr", // USDT
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCER9VnPqg4Vtm6Wy6GWvrA9hJ6kQ7h3UjCr/logo.png",
  },
  {
    chainId: 101,
    address: "9wFFquyxJNhLqCjhztqTuL58B3RNHqbmAoqBhj7HnZRz", // RAY
    name: "Raydium",
    symbol: "RAY",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9wFFquyxJNhLqCjhztqTuL58B3RNHqbmAoqBhj7HnZRz/logo.png",
  },
  {
    chainId: 101,
    address: "ATLASxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // ATLAS
    name: "Star Atlas",
    symbol: "ATLAS",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/logo.png",
  },
];