'use client'
import { useState, useCallback } from 'react'

export interface Comment {
  id: number
  author: string
  avatar: string
  date: string
  content: string
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
    date: "2 hours ago",
    content: "This is a fantastic article about VR technology. I particularly enjoyed the insights about AI integration."
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "/placeholder.svg",
    date: "5 hours ago",
    content: "Great points about the future of gaming. The combination of VR and AI is definitely going to revolutionize the industry."
  }
]

export function useComments() {
  const [comments, setComments] = useState<Comment[]>(initialComments)

  const addComment = useCallback((newComment: Comment) => {
    setComments(prevComments => [newComment, ...prevComments])
  }, [])

  return { comments, addComment }
}

