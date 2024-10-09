import axios from "axios"
import Link from "next/link"

async function getData() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
    return data;
}

const PostPage = async() => {
    const data = await getData();

    return(
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((a) => (
                        <tr key={a.id}>
                            <td>
                                <Link href={`./posts/${a.id}`}>{a.id}</Link>
                            </td>
                            <td>{a.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PostPage;