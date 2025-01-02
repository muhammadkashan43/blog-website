"use client"

import { useState } from "react"
import { useComments } from "@/contexts/comments-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CommentForm() {
  const [comment, setComment] = useState("")
  const { addComment } = useComments()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      addComment({
        author: "Current User",
        avatar: "/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
        content: comment.trim()
      })
      setComment("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src="/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Post Comment</Button>
      </div>
    </form>
  )
}

