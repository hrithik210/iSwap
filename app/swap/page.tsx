"use client";

import { useState } from "react";
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
import { ArrowDownUp, Settings } from "lucide-react";
import { solanaTokens, TokenInfo } from "@/data/SolanaTokens";

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");

  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  return (
    <div className="flex items-center justify-center p-4 flex-grow">
      <Card className="w-full max-w-md shadow-2xl border border-gray-900">
        <CardHeader className="flex flex-row items-center justify-between bg-black text-white">
          <CardTitle className="text-white">Swap</CardTitle>
          <Button variant="secondary" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 bg-black">
          {/* From Token Selection */}
          <div className="space-y-2">
            <label htmlFor="fromToken" className="text-sm font-medium text-white">
              From
            </label>
            <div className="flex space-x-2">
              <Input
                id="fromAmount"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-grow bg-gray-600 text-white"
              />
              <Select onValueChange={(value) => setFromToken(value)}>
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
            <label htmlFor="toToken" className="text-sm font-medium text-white">
              To
            </label>
            <div className="flex space-x-2">
              <Input
                id="toAmount"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="flex-grow bg-gray-600 text-white"
                readOnly // To make it auto-calculated
              />
              <Select onValueChange={(value) => setToToken(value)}>
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
        </CardContent>
        <CardFooter className="bg-black">
          <Button
            className="w-full bg-white text-black hover:bg-gray-500"
            onClick={() => {
              console.log("Swapping:", fromAmount, fromToken, "to", toAmount, toToken);
            }}
            disabled={!fromToken || !toToken || !fromAmount}
          >
            Swap
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
