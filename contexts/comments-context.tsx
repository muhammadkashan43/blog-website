"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'

export interface Comment {
  id: number
  author: string
  avatar: string
  date: string
  content: string
}

interface CommentsContextType {
  comments: Comment[]
  addComment: (newComment: Omit<Comment, 'id' | 'date'>) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined)

export function CommentsProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "/placeholder.svg",
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
  ])

  const addComment = useCallback((newComment: Omit<Comment, 'id' | 'date'>) => {
    setComments(prevComments => [
      {
        ...newComment,
        id: Date.now(),
        date: "Just now"
      },
      ...prevComments
    ])
  }, [])

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  const context = useContext(CommentsContext)
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsProvider')
  }
  return context
}

