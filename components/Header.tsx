import Image from "next/image"
import { NavBar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-700">
      <NavBar />
      <main className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-purple-500/20 rounded-full text-sm">
              Featured Post
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              How AI will Change the Future
            </h1>
            <p className="text-purple-100 text-lg leading-relaxed max-w-xl">
              The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
            </p>
            <Button variant="secondary" size="lg" className="font-medium">
              Read more
            </Button>
          </div>
          <div className="relative aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl transform rotate-45" />
            <Image
              src="/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
              alt="AI Robot Face Illustration"
              width={600}
              height={600}
              className="relative z-10"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent rounded-b-3xl" />
          </div>
        </div>
      </main>
    </div>
  )
}

