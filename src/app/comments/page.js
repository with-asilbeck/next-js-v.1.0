import axios from "axios"
import Link from "next/link"

async function getCommentData(){
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=15")
    return data;
}

const CommentsPage = async() => {
    const data = await getCommentData();

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>body</th>
                    <th>email</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((a) => (
                    <tr key={a.id}>
                        <td>
                            <Link href={`./comments/${a.id}`}>{a.id}</Link>
                        </td>
                        <td>{a.body}</td>
                        <td>{a.email}</td>
                        <td>{a.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CommentsPage;