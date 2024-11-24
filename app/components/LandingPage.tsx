import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to ISwap</h1>
        <p className="text-xl text-muted-foreground">Swap your crypto tokens easily and securely</p>
        <Button asChild size="lg" className='hover:bg-gray-400 bg-white text-black'>
          <Link href="/swap">Start Swapping</Link>
        </Button>
      </div>
    </div>
  )
}