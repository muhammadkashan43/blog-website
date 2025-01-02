import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold">Zarrin</span>
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/blog" className="text-sm hover:text-purple-200">
          Blog
        </Link>
        <Link href="/about" className="text-sm hover:text-purple-200">
          About
        </Link>
        <Search className="w-5 h-5" />
        <Button className="bg-white text-purple-600 hover:bg-purple-50">
          Contact Us
        </Button>
      </div>
    </nav>
  )
}

