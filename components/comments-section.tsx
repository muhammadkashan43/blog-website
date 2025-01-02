import { Separator } from "@/components/ui/separator"
import { CommentForm } from "./comment-form"
import { CommentList } from "./comment-list"
import { CommentsProvider } from "@/contexts/comments-context"

export function CommentsSection() {
  //const commentsState = useComments() //This line is no longer needed because of the context provider

  return (
    <CommentsProvider>
      <div className="space-y-6">
        <Separator className="my-8" />
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Comments</h2>
          <CommentForm />
          <CommentList />
        </div>
      </div>
    </CommentsProvider>
  )
}

