import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useComments } from "@/contexts/comments-context"

export function CommentList() {
  const { comments } = useComments()

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar>
            <AvatarImage src={comment.avatar} />
            <AvatarFallback>{comment.author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

