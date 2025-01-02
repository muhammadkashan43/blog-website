interface ArticleHeaderProps {
  category: string
  date: string
  title: string
}

export function ArticleHeader({ category, date, title }: ArticleHeaderProps) {
  return (
    <header className="space-y-4 mb-8">
      <div className="text-sm text-gray-600">
        {category} • {date}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h1>
    </header>
  )
}

