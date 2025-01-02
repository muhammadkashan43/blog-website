import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  image: string
  tag: string
  title: string
  date: string
  href: string
}

export function BlogCard({ image, tag, title, date, href }: BlogCardProps) {
  return (
    <div className="flex flex-col bg-slate-50 transition-transform hover:scale-105 hover:shadow-xl p-3 rounded-xl space-y-3">
      <Link href={href} className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </Link>
      <div className="space-y-2">
        <span className="text-sm font-semibold text-gray-600">{tag}</span>
        <h2 className="font-semibold text-xl font-roboto">
          <Link href={href}>{title}</Link>
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-serif">{date}</span>
          <Link href={href} className="text-sm font-bold hover:underline text-blue-600 hover:text-blue-800">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

