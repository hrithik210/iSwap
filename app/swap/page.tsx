"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownUp, Settings } from 'lucide-react'

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')

  return (
    <div className="flex items-center justify-center p-4 flex-grow">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between border-b border-border">
          <CardTitle>Swap</CardTitle>
          <Button variant="secondary" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="fromAmount" className="text-sm font-medium">From</label>
            </div>
            <div className="flex space-x-2">
              <Input
                id="fromAmount"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-grow bg-input"
              />
              <Select>
                <SelectTrigger className="w-[120px] bg-input">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="dai">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="ghost" size="icon">
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="toAmount" className="text-sm font-medium">To</label>
            </div>
            <div className="flex space-x-2">
              <Input
                id="toAmount"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="flex-grow bg-input"
              />
              <Select>
                <SelectTrigger className="w-[120px] bg-input">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="dai">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Swap</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

