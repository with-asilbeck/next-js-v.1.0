'use client'
import { useRouter } from "next/navigation"
import "../page.css"

export default function BlogPage(){
    const router = useRouter();

    return(
      <div className="blog-container">
        <h1>Blog Page</h1>

        <button onClick={() => {
          router.push('/blog/oneblog')
        }}>Go OneBlogs</button>
      </div>
    )
}