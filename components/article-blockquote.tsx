interface BlockquoteProps {
  children: React.ReactNode
  author?: string
}

export function ArticleBlockquote({ children, author }: BlockquoteProps) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-purple-500">
      <div className="text-lg text-gray-700 italic">
        {children}
      </div>
      {author && (
        <cite className="block mt-2 text-sm text-gray-600">
          — {author}
        </cite>
      )}
    </blockquote>
  )
}

