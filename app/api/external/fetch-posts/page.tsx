"use client"
import {useState, useEffect} from "react"


export default function
FetchPostsPage(){
    const [posts, setPosts] = 
    useState([])
    const [error, setError] =
    useState("")
    const [loading, setLoading] =
    useState(true)
    useEffect( () => {
        fetch("/api/external")
        .then((res)=> res.json
        ())
        .then((data) => {
            if(data.success){
                setPosts(data.data)
            }else{
                setError(data.message)
            }
        })
        .catch((err) => setError("An expected error"))
        .finally(() => setLoading(false))
    }, [])
//     // if(loading) return <p>loading</p>
    
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: {id: number; title: string}) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
           
 )

}


//gap

// return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 style={{ fontSize: '2rem', color: '#333' }}>📃 Posts</h1>
//       {loading && <p style={{ color: '#555' }}>Loading posts...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {!loading && !error && posts.length === 0 && (
//         <p style={{ color: '#888' }}>No posts available. Check back later!</p>
//       )}
//       {!loading && !error && posts.length > 0 && (
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           {posts.map((post) => (
//             <li
//               key={post.id}
//               style={{
//                 padding: '10px',
//                 margin: '10px 0',
//                 border: '1px solid #ddd',
//                 borderRadius: '5px',
//                 backgroundColor: '#f9f9f9',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.3s',
//               }}
//               onClick={() => alert(`You clicked on post: ${post.title}`)}
//             >
//               {post.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };



