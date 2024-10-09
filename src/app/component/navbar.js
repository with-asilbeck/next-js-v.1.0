'use client'
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter();

    return(
        <div>
            <button onClick={() => router.push('./')}>Home</button>
            <button onClick={() => router.push('./blog')}>Blog</button>
            <button onClick={() => router.push('./contact')}>Contact</button>
            <button onClick={() => router.push('./posts')}>Posts</button>
            <button onClick={() => router.push('./comments')}>comments</button>
        </div>
    )
}

export default Navbar;