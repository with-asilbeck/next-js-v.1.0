'use client'
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15');
                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getCommentData = async() => {
            try {
                const { cdata } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15')
                setComments(cdata)
            } catch (error) {
                console.log(error)
            } finally{
                setIsLoading(false)
            }
        }
    }, [])

    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : (
                posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </div>
                )),
                comments.map((comment) => (
                    <div key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>{comment.title}</Link>
                    </div>
                ))
            )}
        </>
    );
};

export default HomePage;