"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp, Settings, Loader2 } from "lucide-react";
import { solanaTokens, TokenInfo } from "@/data/SolanaTokens";

export default function SwapPage() {
  
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("0.0");
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

 
  interface QuoteResponse {
    outAmount?: string;
    error?: string;
  }

  interface QuoteParams {
    fromAmount: string;
    fromToken: string;
    toToken: string;
  }


  const isValidNumber = (value: string): boolean => {
    return value === "" || /^\d*\.?\d*$/.test(value);
  };


  const getQuote = async ({ fromAmount, fromToken, toToken }: QuoteParams): Promise<string> => {
    try {
      setIsLoading(true);
      setError("");
  
    
      const fromTokenInfo = solanaTokens.find(token => token.address === fromToken);
      const toTokenInfo = solanaTokens.find(token => token.address === toToken);
  
     
      if (!fromTokenInfo) {
        throw new Error("Invalid source token.");
      }
      if (!toTokenInfo) {
        throw new Error("Invalid destination token.");
      }
  
     
      const amountInSmallestUnit = BigInt(
        Math.floor(parseFloat(fromAmount) * Math.pow(10, fromTokenInfo.decimals || 0))
      ).toString();
  
      
      const response = await fetch(
        `https://quote-api.jup.ag/v6/quote?inputMint=${fromToken}&outputMint=${toToken}&amount=${amountInSmallestUnit}&slippageBps=50`
      );
  
      if (!response.ok) {
        throw new Error(`API response error: ${response.status}`);
      }
  
      const data: QuoteResponse = await response.json();
  
     
      if (!data?.outAmount) {
        throw new Error("No valid quote available.");
      }
  
     
      const toTokenDecimals = toTokenInfo.decimals || 6;
      const rawOutAmount = BigInt(data.outAmount);
      const divisor = BigInt(Math.pow(10, toTokenDecimals));
      
     
      const integerPart = rawOutAmount / divisor;
      const fractionalPart = rawOutAmount % divisor;
  
      const formattedOutAmount = `${integerPart.toString()}.${
        fractionalPart.toString().padStart(toTokenDecimals, '0')
      }`.replace(/\.?0+$/, '');
    
      setToAmount(formattedOutAmount);
      return formattedOutAmount;
  
    } catch (error) {
      console.error("Quote Fetch Error:", error);
      setError(error instanceof Error ? error.message : "An unexpected error occurred");
      return toAmount;
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (fromAmount && fromToken && toToken && isValidNumber(fromAmount)) {
      const fetchQuote = async () => {
        await getQuote({ fromAmount, fromToken, toToken });
      };
      fetchQuote();
    }
  }, [fromAmount, fromToken, toToken]);


  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    
  
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleSwap = () => {
    console.log("Swap Initiated:", {
      fromAmount,
      fromToken,
      toAmount,
      toToken
    });
  };

  return (
    <div className="flex items-center justify-center p-4 flex-grow">
      <Card className="w-full max-w-md shadow-2xl border border-gray-900">
        <CardHeader className="flex flex-row items-center justify-between bg-black text-white">
          <CardTitle className="text-white">Swap Tokens</CardTitle>
          <Button variant="secondary" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 bg-black">
       
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">From</label>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter amount"
                value={fromAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (isValidNumber(value)) {
                    setFromAmount(value);
                  }
                }}
                className="flex-grow bg-gray-600 text-white"
              />
              <Select 
                value={fromToken}
                onValueChange={(value) => setFromToken(value)}
              >
                <SelectTrigger className="w-[120px] bg-black text-white">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white max-h-60 overflow-y-auto">
                  {solanaTokens.map((token: TokenInfo) => (
                    <SelectItem key={token.address} value={token.address}>
                      {token.symbol} - {token.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

        
          <div className="flex justify-center">
            <button
              className="hover:bg-gray-800 p-2 rounded-full"
              onClick={handleSwapTokens}
              aria-label="Swap Tokens"
            >
              <ArrowDownUp className="h-6 w-6 text-white" />
            </button>
          </div>

         
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">To</label>
            <div className="flex space-x-2">
              <div
                className="flex-grow bg-gray-600 text-white p-2 rounded flex items-center"
                style={{ minHeight: "38px" }}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5 mx-auto" />
                ) : (
                  toAmount || "0.0"
                )}
              </div>
              <Select 
                value={toToken}
                onValueChange={(value) => setToToken(value)}
              >
                <SelectTrigger className="w-[120px] bg-black text-white">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white max-h-60 overflow-y-auto">
                  {solanaTokens.map((token: TokenInfo) => (
                    <SelectItem key={token.address} value={token.address}>
                      {token.symbol} - {token.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
        </CardContent>
        
        <CardFooter className="bg-black">
          <Button
            className="w-full bg-white text-black hover:bg-gray-500"
            onClick={handleSwap}
            disabled={
              !fromToken || 
              !toToken || 
              !fromAmount || 
              isLoading || 
              parseFloat(fromAmount) <= 0
            }
          >
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Fetching Quote</>
            ) : (
              "Swap"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}