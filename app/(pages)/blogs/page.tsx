import { BlogCard } from "@/components/Blogcard"

const blogs = [
  {
    image: "/breakreate-tFA3kJcMUco-unsplash.jpg",
    tag: "Travel",
    title: "Train Or Bus Journey?Which one suits?",
    date: "13 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Web Design",
    title: "Best Website to research for your next project",
    date: "12 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
  {
    image: "/austin-neill-hgO1wFPXl3I-unsplash.jpg",
    tag: "Sports",
    title: "How to be a Dancer in 2023 with proper skills?",
    date: "15 March 2023",
    href: "#"
  },
]

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 font-raleway py-12">
      <div className="text-center space-y-5 mb-20">
      <h1 className=" text-sm tracking-wider text-gray-light font-semibold">
          Our blogs
        </h1>
        <h1 className=" text-heading-32 font-extrabold">
          Find our all blogs from here
        </h1>
        <p className="text-gray-600 max-w-2xl text-short-para mx-auto">
          Get blogs we write here to you support. Search and find more write-ups as well as our simple blog posts. We have them all here available to you to read and enjoy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  )
}

